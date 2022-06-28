# weather-app
The Project for phase 1 at Flatiron School had the following requirments:

   1. The web app that you are creating needs to be a single page application.

   2. The app must be created using html/css/js that accesses data from a pubic api. The api must be handled asynchronously and use JSON.

   3. You need to use at least 3 event listeners.

So, these are the rules. Seems challenging, you just learned these new concepts and you are thrown in a situlation where you need to make something with them. The hardest part for me was finding an API. I looked at API’s that tell dad jokes to APIs that have data about cocktails. I didn’t know what app to make with them. Luckly, I found a weather API called openWeatherMap. It tells you the current weather of every place in the world. You just need to create an account on their site and they will give you an API key. I chose the basic free version.

![image](https://user-images.githubusercontent.com/17320451/176316690-d443da31-4915-4872-baa5-6139043ca5c0.png)

I decided to make a simple weather app. At the search bar, users would enter a city, click on the submit button and basic information would appear.

![image](https://user-images.githubusercontent.com/17320451/176316803-44f56afc-73a3-45df-9900-77db64f1e803.png)

After users entered a city name, it would persent new content into the screen. The way I fetch the api was that it would get the JSON data for only the city the user was looking for. This new content on the top has the city’s name, an image of the current weather. Followed by the temperture and how it feels like outside. If you notice there’s text that says “More Details”. If a user clicks on it then they would get extra information about the weather in that city.

![image](https://user-images.githubusercontent.com/17320451/176316858-c7d1ef60-96a4-499a-83c6-bae5da3d0dbd.png)

