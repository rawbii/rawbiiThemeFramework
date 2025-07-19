/**
 * @name OtterDMPet
 * @description Replaces the Discord DM icon (Discord logo) with a cute lil otter :3
 * @version 1.0.0
 * @author rawbii
 * @source https://github.com/rawbii/rawbiiThemeFramework
 */

export default {
    name: "OtterDMPet",
    description: "Replace the Discord DM icon with otter.",
    authors: [{ name: "rawbii", github_username: "rawbii" }],
    version: "1.0.0",
  
    start() {
      const style = document.createElement("style");
      style.id = "otter-dm-icon-style";
      style.textContent = `
      /* Hide default DMs icon */
      [href="/channels/@me"] svg {
        display: none !important;
      }
  
      /* Insert otter icon */
      [href="/channels/@me"]::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        top: 8px;
        left: 8px;
        background-image: url("https://raw.githubusercontent.com/rawbii/rawbiiThemeFramework/main/assets/otter-icon.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10;
      }
  
      /* Ensure container is positioned */
      [href="/channels/@me"] {
        position: relative;
      }
      `;
      document.head.appendChild(style);
    },
  
    stop() {
      const style = document.getElementById("otter-dm-icon-style");
      if (style) style.remove();
    }
  };
  