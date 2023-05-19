
# NewsWave

A brief description of what this project does and who it's for

## Table of Contents
<u> Text <u>  

* <u>Features<u>
* Installation
* Usage
* Contributing
* License


## Features
* Fetches news articles from a API
* Infinite scroll to load more news articles as the user scrolls
* Dark and light modes for better readability in different environments
* Routing to navigate between different sections of the website
* Top-loading bar to indicate loading progress





## API Reference

#### Get all items

```bash
  GET https://newsapi.org/v2/top-headlines?&apiKey=${props.apiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |

#### Get item

```bash
  GET {props.apiKey}&Endpoint${Endpoint}
```

| Endpoint | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | Country code, eg: in, us |
| `category`      | `string` | Name of category , eg: business, science|
| `page`      | `numbers` | Page to show|
| `pageSize`      | `numbers` | No. of articles to show |



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Light Mode body bg | ![#7db0de](https://via.placeholder.com/10/7db0de?text=+) #7db0de |
| Dark Mode body bg | ![#F87D51](https://via.placeholder.com/10/F87D51?text=+) #F87D51 |
| Light Mode NavBar Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Dark Mode NavBar Color | ![#1E2B33](https://via.placeholder.com/10/1E2B33?text=+) #1E2B33 |


## Installation

Install newswave with npm

```bash
  npm install newswave
```
```bash
  cd newswave
```
```bash
  npm install
```

    
## Demo




## Usage/Examples

* Obtain the necessary credentials for the confidential API.

* Create a .env file in the root directory of the project and add the following:

```bash
REACT_APP_NEWS_API='API_KEY'
```
Replace your-api-key with your actual API key.

* Start the development server:

```bash
npm start
```
Open your browser and visit below link to view your website
``` bash
http://localhost:3000 
```




## Challenges and Solutions

### API Authentication

One of the primary challenges was handling the authentication for the confidential API used to fetch news articles. The API required an API key for each request.

**Solution**: To address this challenge, I securely stored the API key as an environment variable and accessed it within the application using the ``` .env.local```. This ensured that the API key remained confidential and was not exposed in the source code.

### Routing Re-Mount Issue

When I navigate from one tab to other then the component was not able to reMount
like if I navigate from ```sports``` to ```Entertainment``` then content will not change but If i reload page, it'll chnage

**Solution** To solve this issue I have to give unique key to every tab like for sports : ```key={sports}```



### Infinite Scroll Implementation

Implementing infinite scroll to load more news articles as the user scrolls presented several complexities like one major was, when the ```fetchMoreData``` function run for the first time i.e. First Time InfiniteScroll happen then Duplicated article appeared 

**Solution**: Its happening because setPage(page) which was then above ```const url``` takes a little while to run so o overcome this challenge, I change the ```page``` parameter in ```url``` to ```page+1``` and run ```setPage(page+1)``` after this

### Designing and Implementing Dark and Light Modes
Creating an intuitive and visually appealing dark and light mode feature required meticulous consideration of color schemes and styling throughout the website.

**Solution**: To tackle this challenge, I used ``` useState ``` to change the mode like this:
```bash
[mode, setMode] = useState('light');
``` 
And to decide when to change the state of mode I created a function ```toggleButton``` and called it from ```Button ``` 
 I defined distinct color schemes and applied appropriate styles to various components to ensure consistency and readability across both modes.





## 🚀 About Me
I'm Arin Soni, a passionate developer who loves building web applications. News Wave is a project that I created to showcase my skills in React JS and to provide users with a convenient way to stay updated with the latest news.

As an avid news consumer myself, I wanted to create a website that not only fetches news articles from a reliable API but also provides a seamless browsing experience. The features like infinite scroll, dark and light modes, and a top-loading bar were implemented to enhance user engagement and make the website user-friendly.

I believe that staying informed is crucial in today's fast-paced world, and I wanted to contribute by developing a platform that delivers news in a visually appealing and accessible manner. News Wave is an ongoing project, and I plan to continue improving and adding new features to enhance the user experience.

I hope you find NewsWave useful and enjoyable to use. If you have any feedback or suggestions, please feel free to reach out. Thank you for visiting the repository and supporting my work.


# Thank You

