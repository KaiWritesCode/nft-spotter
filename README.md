# NFT Spotter
<img width="1428" alt="nftspotter-img" src="https://user-images.githubusercontent.com/84258692/149008406-ff97c08e-bec9-4d41-98e5-d276519406f9.png">

## NFT-Spotter is a web site that displays information on the NFT Market.


## Features:
1. Top 100 
2. Market Caps
3. Floor Prices
4. Search by contract addresses
5. NFT of The Day
6. Hot collections
7. Watchlist
8. Traits
9. Volume traded
10. Owners Name
11. And lots more!

## Built With: 
1. React.js
2. React Router
3. Bootstrap
4. Font Awesome

## Apis Used: 
1. [Rarible](https://rapidapi.com/nft-art-generator-nft-art-generator-default/api/rarible-data-scraper) 
2. [Opensea](https://docs.opensea.io/reference/api-overview)


## Challenges I faced: 
The biggest challenge I faced was having to do with setting state from the API calls. I learned that setState was asynchronous, some of the reponses would intially return as empty strings, and only returned the correct value after some time. Since I was attempting to set states of an object all at once, some were returned as undefined which caused confusion. After reading some articles I found a solution is to check if the data is undefined with a double appresand `&&`. I also had trouble with uploading the project using GH-pages. After watching a youtube tutorial and reading [this](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)
article I found that since this project has react router, I had to use `HashRouter` instead of `BrowserRouter` to upload it using gh-pages.
## What I learned: 
- How to limit the response from the API, this was built in with Opensea. With this in mind I created a button that increased the number of items that show, but adding 50 to the state `page`
- This was my first project with Boostrap and React, I learned how to import and apply Bootstrap styles to components. When getting the top market stats, I learned how to display the information as a grid of cards. 
- I imported a library called react multi-carousel which I had to apply styling to and display information from the Rarible API.

## Future plans: 
- Search bar that allows you to search collection name rather than address.
- I plan to upgrade the API plans to get all 10,000 profile pictures to display.
- Light and dark mode toggle.
- Add favorites component, so the user can select which collection they would like to have easy access to.

## Contact me:
If you have any suggestions or feedback, I would love to hear from you please contact me at: 
- kbechdel8@gmail.com
- [Github](https://github.com/therealkai)
- [Twitter](https://twitter.com/kaiwritescode)
