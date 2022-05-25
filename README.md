# The Pokémon API

![pokemon](https://github.com/llcoollasa/pokemonapi/blob/master/public/pokeapi_256.png)
 

## Prerequisites

I have used Node version `17.8.0`

## Available Scripts 

### `npm start`
 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

### `npm test`
Run the tests
 
## Configurations
| Config Name                       | Value                                                     |
| ----------------------------------| --------------------------------------------------------- |
| POKEMON_URL                       | Pokemon API URL                                           |
| POKEMON_LOGO                      | App Logo                                                  |
| PAGINATION_TOTAL_LINKS_TO_DISPLAY | This will display the number of pagination links on app   |
| PAGINATION_LIMIT_RECORDS_PER_PAGE | How many records per page                                 |

 ## Improvements/Time constraints

 - Detail Page UI/UX can be improve. Since there are more details available in current API call pokemon detail page can be organized with using pokemon other APIs such as ability, characteristic, gender etc. 
 - Pagination can be improved with adding first/last/prev/next links. Also as mentioned application can have endless scrolling.
 - Pagination uses state to display the result at the moment. In future it can be improved to go to specific page from the URL
 - Application wise general error handling can be use. Error component can be used in poperly through the app.
 - Intitial page could be combined with pokemon images and basic info
 - Enable query caching for app performance. Such as https://react-query.tanstack.com/guides/caching
 
