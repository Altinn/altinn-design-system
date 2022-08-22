If you make changes to any drawio, and re-export to SVG, add the following content inside the `svg` element to support viewing the SVG in both light and dark theme

```

  <style type="text/css">
    @media (prefers-color-scheme: dark)
    {
        :root {--light-color: #c9d1d9; --dark-color: #0d1117; }
        svg[style^="background-color:"] { background-color: var(--dark-color) !important; }
        g[filter="url(#dropShadow)"] { filter: none !important; }
        [stroke="rgb(0, 0, 0)"] { stroke: var(--light-color); }
        [stroke="rgb(255, 255, 255)"] { stroke: var(--dark-color); }
        [fill="rgb(0, 0, 0)"] { fill: var(--light-color); }
        [fill="rgb(255, 255, 255)"] { fill: var(--dark-color); }
        g[fill="rgb(0, 0, 0)"] text { fill: var(--light-color); }
        div[data-drawio-colors*="color: rgb(0, 0, 0)"]
            div { color: var(--light-color) !important; }
        div[data-drawio-colors*="border-color: rgb(0, 0, 0)"]
            { border-color: var(--light-color) !important; }
        div[data-drawio-colors*="border-color: rgb(0, 0, 0)"]
            div { border-color: var(--light-color) !important; }
        div[data-drawio-colors*="background-color: rgb(255, 255, 255)"]
            { background-color: var(--dark-color) !important; }
        div[data-drawio-colors*="background-color: rgb(255, 255, 255)"]
            div { background-color: var(--dark-color) !important; }
    }
</style>

```
