# northwoodesko.com  
## Northwood United Methodist Church in Esko, MN - [www.northwoodesko.com](http://www.northwoodesko.com/)  

### General Notes:  

This site is powered by [Jekyll](http://jekyllrb.com/) and hosted through [GitHub pages](https://pages.github.com/)
at http://www.northwoodesko.com. If you have any questions about this website please contact wandersen02@gmail.com.

## Developer Notes:

**Philosophy**  

This site is intended to require as little maintenance from the church staff and the developer as possible.
All of the pictures are being pulled from the church's existing Facebook page. The bulletins, newsletters,
and documents are coming from an [IFTTT](https://ifttt.com/recipes) recipe that pulls them out of a gmail 
inbox and puts them in a public dropbox folder. [YQL](https://developer.yahoo.com/yql/console/) is then 
used to scrape out the contents of the dropbox folder.
See [this file](https://github.com/lostphilosopher/eskomethodist/blob/master/assets/javascript/scrapeContent.js) 
for more information.

**Connected Accounts**

Under northwoodesko@gmail.com:  
- [Dropbox](https://www.dropbox.com/)  
- [Gmail](https://mail.google.com)  
- [IFTTT](https://ifttt.com)  
Other:  
- [BlueHost](http://www.bluehost.com/)
- [Facebook](https://www.facebook.com/pages/Northwood-United-Methodist-Church-Esko-MN/113344768735604) 

**Starting a local Jekyll instance**

1. Install jekyll: ```gem install jekyll```

2. Clone this repo: ```git clone https://github.com/lostphilosopher/eskomethodist.git```

3. cd into the repo: ```cd eskomethodist```

4. Test the application by serving it locally: ```jekyll serve```

5. Verify that you can see your jekyll project running at [localhost:4000/](http://localhost:4000/ "Localhost on port 4000")

**Deploying to Production**  

1. cd into the project repo: ```cd eskomethodist```

2. Checkout the gh-pages branch: ```git checkout gh-pages```

3. Push directly to the gh-pages branch ```git push origin gh-pages```
