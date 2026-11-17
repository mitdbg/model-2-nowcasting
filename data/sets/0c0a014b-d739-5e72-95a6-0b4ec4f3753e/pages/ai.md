<!-- AI Access › AI Access, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/ai.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 26ce5affb9b762b7 -->

# AI Access

AI agents such as Claude can read this site's pages and the data behind them. They can connect to an MCP server, or read a plain-text guide to the site. Through MCP they can also send the Model 2 team feedback on anything they find.

## Quickest: paste this into your agent

Any agent that can read web pages can start from the site's guide for agents:

Read https://mitdbg.github.io/model-2-nowcasting/llms.txt and use it to answer my questions about Model 2.Copy

## Connect over MCP

The Model Context Protocol lets an agent call the site's tools directly: list the forecasts, read a page, get a sector's forecast with its 90% range, search entities and observations, and more. The server's address:

https://mikecafarella--model2-mcp.us-east.modal.run/mcpCopy

Streamable HTTP · reads only, except to send feedback · no key or sign-in

Agent | How to add it

Claude desktop app | In Settings, open Connectors and add a custom connector. Name it Model 2, paste the server address above, and leave sign-in off.

Claude Code | Run in a terminal:
claude mcp add --transport http model2 https://mikecafarella--model2-mcp.us-east.modal.run/mcpCopy

## Sending feedback from an agent

Agents can send the Model 2 team a note about anything on the site with send_feedback, with no key or sign-in. Ask your agent in your own words, for example: “Tell the Model 2 team that Cardinal Airways’ capacity looks too low in 2025.” The agent works out exactly which chart, row or number you mean and sends that with your note.

## Check that it works

Ask your agent: "Using Model 2, list the forecasts and summarize the default one." It should call list_forecasts and name forecast 976debf3. In Claude Code, claude mcp list shows the server as connected.

## What it offers

Every tool works on one forecast, the site's default unless the agent names another. A forecast determines its world, model and parameter fit.

Tool | What it returns

site_guide | The site's pages, tab by tab, and its vocabulary (world, forecast, as-of date, hit rate, spread ratio)

list_forecasts | Every forecast: id, when computed, as-of date, months covered, world, model and fit

read_page | Any page of this site as text

get_forecast | The forecast's and its parameter fit's facts, and the world's

get_fitted_parameters | One sector's fitted parameters beside their starting values and ground truth

get_sector_series | A sector's quantities month by month: median, 90% range and, on a synthetic world, the truth

get_official_statistic | An official statistic against the model's sector total, month by month

search_entities | The world's businesses, filtered by name, sector or kind

get_entity | One business: its facts, parameters and hidden states over time with their observations

search_observations | Published readings, filtered by kind, source, subject or date

get_evaluation | The Evaluation tab's numbers, by view and sector

get_next_version | Current Problems, Possible Improvements and Improvement Testing

get_data_model | The data model's tables, columns and joins

get_data_file | Any of a forecast's data files, or part of one

send_feedback | Sends the Model 2 team a note about a page, series, entity, observation, equation or anything else, tied to exactly what it is about

## Without MCP

- llms.txt: a guide for agents to the site, its vocabulary, its forecasts, and where everything is.

- Every page's text, as Markdown: listed in llms.txt, one file per page and forecast.

- Every number, as JSON: start from data/sets.json, the list of forecasts.

## Privacy and limits

- Every tool only reads, except send_feedback, which records a note for the Model 2 team. Agents are asked to send feedback only when you ask them to.

- The server serves the same data as this site, which is public; there is nothing to sign in to.

- The server keeps no record of what agents ask, beyond its hosting platform's standard request logs. It keeps the notes sent as feedback: from the site with the sender's Google name and email, from agents with only the agent's name.

- Answers are cut at about 20,000 characters, with a note saying so; agents can ask for less.

- The server reads this site as published, so it reflects a new version within about five minutes.

- The Next Version pages are written by AI agents and are not human-reviewed; the tools say so too.
