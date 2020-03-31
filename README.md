# mpf-org

The src branch contains all of the source code to generate the website while the master branch contains the live website. This website uses Nikola, a static site generator written in Python. Review their [documentation](https://getnikola.com/handbook.html) to get started.

## Setup
Conda is used to manage the environment and pip is used for extra dependencies:

```
conda env create -f environment.yml
conda activate mpforg
pip install -r requirements.txt
```

## File Format
All file formats for blog posts and pages **MUST** be in one of the following formats:
* Markdown - extension is "md"
* HTML - extension is "html"
* IPYNB - extension is "ipynb"

This enables everyone within the organization to manage the content easier as they do not have to learn a new style every time a change needs made.

## Directory Structure
At the root of the repository, the environment files "environment.yml", for anaconda, and "requirements.txt", for pip, are used within the setup. The actual website source code is within the website directory.

### Pages/Posts
For those that are only concerned with blogging or creating pages, the "website/pages" and "website/posts" directories are of interest.

### Assets
In some cases you may want to include an image or some other file. You can add a file to the "assets" directory respective of the file type. For example, image files should be placed in "website/files/images". Linking to an asset within a page or post is respective of the root URL. Placing an image named "cow.png" within "website/files/images/" requires a link of "/images/cow.png."

## Creating a Post/Page
Create an empty file of whichever supported format you prefer within the respective "post" or "page" directory. A post will be displayed within the blog portion of the site while a page may show up anywhere within the site. In addition to the content of the page/post, a file with the extension ".meta" should be created. The meta file is used to create a slug, specify the author, etc.

**If you are creating a Jupyter notebook page/post, it is ideal to have an environment file to recreate the content otherwise the original author will be fully responsible of the content.**

An ideal Jupyter post consists of:

Try to name the file based on the slug.

base_file_name = "my-awesome-tutorial"

* A jupyter notebook file named {base_file_name}.ipynb
* A meta file named {base_file_name}.meta
* An environment file named {base_file_name}.environment which is used to create a conda environment for the post.

Take a look through [nikola's documentation](https://nikola.readthedocs.io/en/latest/manual/#metadata-fields) covering meta files.

### Example Page
See "website/pages/faqs.md" and "website/pages/faqs.meta".

## Author Images
The file "website/conf.py" has some configuration that allows authors to change their blog image that is displayed. Find the "GLOBAL_CONTEXT" variable and update accordingly.

```python
GLOBAL_CONTEXT = {

    # All images rendered for post headers for each author is defined here.
    # A helper in "author_helper.tmpl" may be used to obtain the image.
    'author_images': {
        'Matrix Profile Foundation': '/images/mpf-author-logo.png',
        'Tyler Marrs': '/images/tyler.jpg',
        'Francisco Bischoff': '/images/francisco.jpg',
        'Frankie Cancino': '/images/frankie.jpg',
        'Jack Green': '/images/jack.jpg',
        'Austin Ouyang': '/images/austin.png',
        'Andrew Van Benschoten': '/images/andrew.jpg',
    }
}
```

The author name in the post/page meta file must match the "author_images" key (author name). In the case that the author is not found, the default "Matrix Profile Foundation" logo is displayed as the image.

## Building/Serving
When you want to see how your post/page looks on the website, you must build and serve the content. Building the website generates all of the static pages and serve creates a local web server.

Within the website directory, run the following:
```
nikola build
nikola serve
```
You should be able to view the site on [http://localhost:8000](http://localhost:8000)

## Deploying
When you are happy with your post, you may deploy the website using the command:

```
nikola build
nikola github_deploy
```

This command should be ran on the src branch within the website directory. Nikola automatically commits the built website to the master branch. You may provide a custom commit message:

```
nikola github_deploy -m "my commit message"
```
