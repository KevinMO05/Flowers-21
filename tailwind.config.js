/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      boxShadow:{
        'custom-box': '0px 0px 15px 	rgb(0, 0, 0, .2)'
      },
      backgroundImage:{
        'footer-texture' : "url('img/6674f0cdb5b7b401612cf065_noise-50.jpg')"
      },
    },
  },
  
  plugins: [],
}

