import MainLayout from '../components/mainlayout';
import React, { useState } from 'react';
import styles from '../style.module.css';

function SOS() {  

  return (
      <div className={styles.container}>
        <h1>Summer of Science</h1>
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

export default SOS;

// Google Drive links
const driveLinks = [
  "https://drive.google.com/file/d/1T7O6I-OA-abphp_urCCzY5zt_WWuw05s/preview",
  "https://drive.google.com/file/d/149-6XhGAklYQJ_qiPbP6yZMYett3fauc/preview",
  "https://drive.google.com/file/d/11vhVyPj77x5TZ_5VeIaFVbSt8tWIAiGj/preview",
  "https://drive.google.com/file/d/1BqtGTtB75QZ3OLtwuJeashafwGRs-_8L/preview",
  "https://drive.google.com/file/d/1WBY77HJJKpEoFGD3UzwTC7echULYXpdk/preview",
  "https://drive.google.com/file/d/1pFH48qyDFzYGmRZdJcU27ua3_JidZZhP/preview",
  "https://drive.google.com/file/d/1Jz2auVyk6yp2Mj3XyEab1PTkw7BOEr6-/preview",
  "https://drive.google.com/file/d/17Q1aBDCT2rJ84U35UK995Bfl4RfG6RXE/preview",
  "https://drive.google.com/file/d/1VRcKnWdSv9qG4RunHZW6IV6Y-GTxIHWA/preview",
  "https://drive.google.com/file/d/1_SRfsRPlL6kgD16DqBcw3qT4283glsZZ/preview",
  "https://drive.google.com/file/d/14KQYkO0QfNLnwFdBMnSLXVdowtAT1HRz/preview",
  "https://drive.google.com/file/d/1vVgk4DW3bBl4edzu7DTsc3ISrfnFvCV5/preview",
  "https://drive.google.com/file/d/1-ewEO2Cxn96o1MW3PhxHsR2G4O4sUXqo/preview",
  "https://drive.google.com/file/d/1QYxz2WMwLDn0jQdOND23E5AKDDqhPnFf/preview",
  "https://drive.google.com/file/d/1guPnj7smFMRN9NnQDjNn1PPHybt_j0Am/preview",
  "https://drive.google.com/file/d/1KGW41B6O3C28nRZfF5QSBLSIHcRhSNvr/preview",
  "https://drive.google.com/file/d/1c8ERKJ_i6nS0dEf9TZScNVHrfoH_rDKY/preview",
  "https://drive.google.com/file/d/1-NmqOH5gQZw92YtPLsHdqpGpzMpnN85j/preview",
  "https://drive.google.com/file/d/1nbtn8tazpY0I3FUS2WwS0R0FKtPlYXZP/preview",
  "https://drive.google.com/file/d/1EPtZEgqayoWROLZVcliKR-BF8otox69g/preview",
  "https://drive.google.com/file/d/1lmMFj1ZUAu5EnBRLPSuCwsnXTpseKXNw/preview",
  "https://drive.google.com/file/d/1Gl5Es_vQ302Fet8fV7STUqLCGerLEktg/preview",
  "https://drive.google.com/file/d/1_WiXPgFdA19jNJW5AGpNyIjhTQvRZF9l/preview",
  "https://drive.google.com/file/d/1NcmBS8ZFvtWyLRoGO-CehxqHo1k6CEyK/preview",
  "https://drive.google.com/file/d/1Uw-Zn2aN9Q9ecWr3A_ivVDdjP7B7uBBS/preview",
  "https://drive.google.com/file/d/1Q9Y4eES7czTSsgwqxbeWZLO6Yq8pDUMZ/preview",

]
