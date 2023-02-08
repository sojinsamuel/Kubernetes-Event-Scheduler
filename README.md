# **Kubernetes Event Scheduler**

This project generates an image of Kubernetes events by using a template written in Satori-HTML. The output image is in PNG format.

## **Prerequisites**

- Node.js v12 or above
- NPM v6 or above

## **Installation**

1. Clone the repository
2. Change the working directory: 

```bash
cd Kubernetes Event Scheduler
```

1. Install the dependencies 

```bash
npm install
```

## **Usage**

1. To generate the image, run the following command:

```bash

node events.js
```

The generated image **`events.png`** will be saved in the root directory of the project.

## Troubleshooting

### Text Cutoff Issue

- I tried several ways to resolve the issue of text cutoff, but none of them worked (Main Issue)

## **Libraries Used**

- node-fetch
- fs/promises
- satori-html
- satori
- @resvg/resvg-js
