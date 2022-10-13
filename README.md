<!-- GETTING STARTED -->
### How to Setup

1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)

2. Clone the repo
   ```sh
   git clone https://github.com/defrianafandi/cypress-automation.git
   ```
3. Move your clone file project to your choice folder

4. Open the project with your code editor (ex: Visual Studio Code, Notepade ++, etc.)

5. Open terminal

6. Create `Cypres.env.json` then input your API, sample_url_api = `https://api.weatherbit.io/v2.0/`  then, sample_url_ui = `https://www.service.nsw.gov.au/`.
   ```json
   {
    "api_key": "your_key",
    "url_api": "sample_url_api",
    "url_ui": "sample_url_ui"
   }
   ```

7. Install NPM packages in your terminal
   ```sh
   npm install
   ```

### How to run
   ```sh
   npm cypress run
   ```