# Prewired Website

Code for [https://prewired.org](https://prewired.org).

Based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/).

### Building this site locally

The below instructions assume you're on some Linux distribution:

1. Install `ruby` packages packages for your system:
    - Ubuntu: `sudo apt install ruby ruby-dev build-essential`
    - Fedora: `sudo apt install ruby ruby-devel` (and maybe a build-essential equivalent)
1. Install [jekyll](https://jekyllrb.com/docs/installation/) and [bundler](https://bundler.io/) using `gem`:
    - `sudo gem install jekyll bundler`
1. Clone and navigate into this repo:
    ```
    mkdir dev
    cd dev
    git clone https://github.com/prewired/prewired.github.io.git
    cd prewired.github.io
    ```
1. Configure bundle to install prerequisites locally: 
    - `bundle config set --local path 'vendor/bundle'`
1. Install prerequisites: 
    - `bundle install`
1. Launch the development server: 
    - `bundle exec jekyll serve`
