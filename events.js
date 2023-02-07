import fetch from "node-fetch";
import { readFile, writeFile } from "node:fs/promises";
import { html } from "satori-html";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const events = [
  {
    title: "Kubernetes YAML tutorial in 60 minutes",
    host: "Edureka Masterclass",
    type: "Online webinar",
    date: "26 Jan",
  },
  {
    title: "Docker and Kubernetes on Rancher",
    host: "Black Women Tech Xchange",
    type: "Online workshop",
    date: "26 Jan",
  },
  {
    title: "Kubernetes configuration security and compliance on EKS",
    host: "Tigera",
    type: "Online workshop",
    date: "26 Jan",
  },
  {
    title: "Offload AWS provisioning to Kubernetes operators",
    host: "AWS Bulgaria User Group",
    type: "In-person meetup",
    date: "26 Jan",
  },
  {
    title: "Self-Driving Delivery into Kubernetes with ArgoCD",
    host: "Cloud Native + Kubernetes Manchester",
    type: "In-person meetup",
    date: "26 Jan",
  },
  {
    title: "Introduction to Kubernetes",
    host: "Fyns Linux User Group",
    type: "In-person meetup",
    date: "26 Jan",
  },
  {
    title: "A quickstart guide to Kubernetes concepts",
    host: "Microsoft",
    type: "Online webinar",
    date: "26 Jan",
  },
  {
    title: "#dontusekubernetes",
    host: "Boston Devops",
    type: "In-person meetup",
    date: "26 Jan",
  },
  {
    title: "Kubernetes on Azure",
    host: "Come Cloud With Us",
    type: "Online meetup",
    date: "26 Jan",
  },
  {
    title:
      "Flyte - a Kubernetes-native workflow automation platform ML and data processes at scale",
    host: "Bellevue Applied Machine Learning Meetup",
    type: "In-person meetup",
    date: "26 Jan",
  },
  {
    title: "GitOps and Kubernetes automation in 3 weeks",
    host: "O'Reilly",
    type: "In-person meetup",
    date: "26 Jan",
  },
];

const template = html(`
  <div style="display: flex; flex-wrap: wrap; margin: 2em 4em; position: relative">
      <div style="display: flex; flex-direction: column;">
        <h1>Kubernetes Events starting in the next 24 hours:</h1>
        ${events
          .map(
            ({ title, date, host, type }) =>
              `<h2 style="display: flex; word-break: break-all; ">${date} - <a href="#" style="color:blue;">${title}</a> | ${host} - ${type} </h2>`
          )
          .join(" ")}
      </div>
      <p style="position: absolute; bottom: -15px; right: 250px; margin: 0;">logo</p>
  </div>
`);

const svg = await satori(template, {
  width: 1200,
  fonts: [
    {
      name: "VictorMono",
      data: await readFile("./VictorMono-Bold.ttf"),
      weight: 700,
      style: "normal",
    },
  ],
});

const resvg = new Resvg(svg, {
  background: "rgba(241,244,249,255)",
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

await writeFile("./events.png", pngBuffer);
