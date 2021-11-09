# Prewired Website

Code for [https://prewired.org](https://prewired.org).

Based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/).

### Building this site locally

The below instructions assume you're on some Linux distribution:

1. Install [ruby and ruby-dev / ruby-devel](https://www.ruby-lang.org/en/downloads/) packages for your system
2. Install [jekyll](https://jekyllrb.com/docs/installation/) and [bundler](https://bundler.io/) (using `gem install jekyll bundler`). `gem` is Ruby's package manager
3. Clone and navigate into this repo
4. Configure bundle to install prerequisites locally: `bundle config set --local path 'vendor/bundle'`
5. Install prerequisites: `bundle install`
6. Launch the development server: `bundle exec jekyll serve`
