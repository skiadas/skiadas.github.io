# Testing of markdown/pandoc stuff

First, a simple mermaid graph:
```{.mermaid}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
More stuff here?

## A section here

We want to make sure content within the section and until the next section is somehow toggleable.

### Subsections should do their own toggle

This should also be toggleable, and within the bigger toggle.

## The next section is here

So some more stuff, here.
