# mpf-org

The src branch contains all of the source code to generate the website while the gh-pages branch contains the live website. This website uses nikola. Review their [documentation](https://getnikola.com/handbook.html) to get started.

Setup
-----
Conda is used to manage the environment and pip is used for extra dependencies:

```
conda env create -f environment.yml
conda activate mpforg
pip install -r requirements.txt
```

The website source code may be found in the "website" directory.
