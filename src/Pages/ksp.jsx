import MainLayout from '../components/mainlayout';
import React, { useState } from 'react';
import styles from '../style.module.css';

function KSP() {  

  return (
      <div className={styles.container}>
        <h1>Krittika Summer Projects</h1>
        <h2>Previous Year Reports</h2>

        <div className={styles.driveembed}>
        {driveLinks.map((link, index) => (
          <div key={index}>
            <iframe
              src={link}
              width="400"
              height="525"
              title={`Google Drive Embed ${index}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
        </div>
      </div>
  );
}

export default KSP;

// Google Drive links
const driveLinks = [
  "https://drive.google.com/file/d/1uEwwIAFYRIMU1pQm1WwBkWJzOwjR5H6z/preview",
  "https://drive.google.com/file/d/1ZE9SABqlwclU2h4h_DxDDiApLPOH3_P-/preview",
  "https://drive.google.com/file/d/12kT-jD1Q6tcQmefJvHrmU6AUfj5f1zag/preview",
  "https://drive.google.com/file/d/1LhOwkvYl2sHyInyxrdqT3xPaLVfwS6Dr/preview",
  "https://drive.google.com/file/d/1ejstTD3On9K6-9JaYxhso6j9w-9ahZ5R/preview",
  "https://drive.google.com/file/d/1Ty7UZ5uPbileXEIAw_0wOUwMBS6buuTZ/preview",
  "https://drive.google.com/file/d/1TFtbdb4k7uVJsmp-bZ08Y6zuhBATW2JB/preview",
  "https://drive.google.com/file/d/14XBe1lp-D4EbNs-ndt_vWCxicTBgr6E-/preview",
  "https://drive.google.com/file/d/1tQxtQraoEj8QBBEbT-4eo4KJyv1qQPPe/preview",
  "https://drive.google.com/file/d/1AZirWSd_fyadv8WXP5D2ysugQZ7wO73s/preview",
  "https://drive.google.com/file/d/1NkhDjNevGfUNWvZedJEj0BnYhR_xVePO/preview"
]
