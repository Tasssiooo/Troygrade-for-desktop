/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "icon-ring": "url(./assets/images/social_panel_level_ring.png)",
        "editor": "url(./assets/images/code-editor.png)",
        "search-mask": "url(./assets/images/search_mask.png)",
        "roster-icon-ring": "url(./assets/images/object_s_sprite.png)",
        "sidebar": "linear-gradient(rgb(1, 10, 19), rgb(1, 10, 19))",
        "dialog-close": "linear-gradient(to top, #463714 4%, #785a28 23%, #c89b3c 90%, #c8aa6e 100%)",
        "dialog-close-hover": "linear-gradient(to top, #c89b3c 0%, #f0e6d2 100%)",
        "regalia-icon-challenger": "url(./assets/images/wings_challenger.png)",
        "regalia-icon-grandmaster": "url(./assets/images/wings_grandmaster.png)",
        "settings-image": "linear-gradient(to bottom, #c89b3c, #c89b3c)"
      },
      backgroundPosition: {
        "settings-pos": "left center"
      },
      backgroundSize: {
        "size-icon-ring": "76px 76px",
        "size-editor": "80% 80%",
        "settings-header": "100% 100%"
      },
      boxShadow: {
        "dialog": "0 0 0 1px rgb(1, 10, 19 / 48%)"
      }
    },
  },
  plugins: [],
};
