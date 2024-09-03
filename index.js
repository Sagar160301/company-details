import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';


async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlData = await response.text();

        // Load HTML into cheerio
        const $ = cheerio.load(htmlData);

        const cData = {};

        // Extract basic details
        const basicDetails = $("#basicdetails");
        if (basicDetails.length) {
            const name = basicDetails.find(".mb-0.pt-1.text-left").first();
            cData.companyName = name.text().trim();
        }

        // Extract date
        cData["date"] = $(".mb-0.pt-1.text-left").eq(5).text().trim();

        // Extract contact details
        const contactDetails = $("#CONTACT-DETAILS");
        if (contactDetails.length) {
            const rows = contactDetails.find(".border-bottom");
            rows.each((index, eachR) => {
                const key = $(eachR).find(".col-xl-4.col-6 a").text().trim() ||
                            $(eachR).find(".col-xl-4.col-6").text().trim();
                const value = $(eachR).find(".col-xl-8.col-6 a").text().trim() ||
                              $(eachR).find(".col-xl-8.col-6 h6").text().trim();
                if (key && value) {
                    cData[key] = value;
                }
            });
        }

        // Extract directors
        const directorSection = $("#COMPANY-DIRECTORS");
        if (directorSection.length) {
            const directors = directorSection.find("tbody a");
            directors.each((i, e) => {
                cData[`Director ${i + 1}`] = $(e).text().trim();
            });
        }

        return cData;

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Example usage:
// fetchData('your-url-here').then(data => console.log(data));


async function fetchAllData(urls) {
   for (const url of urls) {
       const data = await fetchData(url);
       if (data) {
           // Write the data to the .json file immediately
           fs.appendFileSync('company_data.json', JSON.stringify(data, null, 2) + ',\n');
           console.log(`Data for ${url} written to company_data.json`);
       }
   }

   console.log('All URLs processed.');
}

// List of URLs to fetch data from
const urls = [
    "https://www.companydetails.in/company/abl-agri-infra-private-limited",
     "https://www.companydetails.in/company/aditya-herbozone-private-limited",
];

fetchAllData(urls);
