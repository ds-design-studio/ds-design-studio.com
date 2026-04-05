---
title: Why I Don’t Use WordPress in 2026
summary: If you are thinking about creating a new website or redesigning an existing website in 2026, should you consider WordPress?
meta:
    description:
    image:
    imageAlt:
category: dev-insights
published_on: 2026-01-30
---

If you are thinking about creating a new website or redesigning an existing website in 2026, you know by now that there are a lot of factors to consider. You might be feeling very motivated to refresh the overall experience for your users, share new kinds of content, or realign your brand image with your offerings. You are probably thinking about what features and functionality you require, what problems you need to solve, and what kind of budget you can work with.

## What Should I Use to Build My Website?

You might also be asking, **“what platform, framework, or tools should I use to build my new website, and can I do it myself or do I need professional support?”** In 2026, you have an overwhelming set of options to choose from in this respect, and it can be difficult to know which option will align best with your goals. Should you use WordPress, because it is a well-established, familiar option? Should you use a website builder like Squarespace, Wix, or Webflow, which offer no-code, visual editing experiences? Or should you enlist the help of a dedicated consultant to craft a completely customized, resilient product that matches your unique needs?

It’s probably no secret [which of these solutions I recommend](/process). But precisely because WordPress remains a popular and even default option for many, in this article I would like to take a brief look at the question, “should I use WordPress to build my new website?” and explain why my answer to that question is a **resounding no**. WordPress has long held sway as the best known, free content management system (CMS), but I believe that there are better options in 2026.

### Does It Matter?

But does it actually matter? Truthfully, the choice of web platform or framework doesn’t matter much for your website. What matters for you, the client, is that you have an **attractive, easy-to-use website** that **serves your users** and is **relatively painless to update and maintain**. Unless you have a specific interest in web technology, you probably don’t care what goes on behind the curtain, and that is totally fine.

However, I like to think about websites using the analogy of building a house (there is a reason they call us _developers_, after all). Sure, you might be able to source cheap, low-quality resources to hastily construct a livable dwelling in a short amount of time. That house probably has basic functions, and it might even have the superficial appearance of something very sleek and attractive. But it also might conceal a number of issues related to structural integrity and deferred maintenance—and the worst part is, you might not even know those issues exist until it’s too late.

So, what happens when the storm inevitably comes? In that critical moment, you want a structure that has enough integrity to remain intact, even in the face of real or potential threat. Suddenly, the “quick and easy,” do-it-yourself option doesn’t sound so promising.

In my experience, while tools and frameworks aren’t _everything_, they aren’t _nothing_, either. And certain web platforms make it _easier_ to build sites that are “future-proofed” and resilient, while some make it _harder_. With the latter, it can often feel like both you, the client, and me, the developer, are fighting against unnecessary obstacles just to produce something salvageable.

But “salvageable” is not a promising outlook for a website. We both want an optimal end product that works for your needs, that serves your users, and that stays “future-proof” even in the face of a rapidly changing tech landscape. My goal as a web designer and developer is to deliver just that.

And that’s why I see myself as something more than a mere “transactional developer” who just passively assents to any request that comes from an actual or potential client. Many web agencies and studios will operate from this model, which tends to put their own workflows and goals first. Instead, I act as a strategic consultant to guide clients to the **best possible website for their specific needs**.

## Why I Don’t Use or Recommend WordPress

In my experience, the path to that goal generally does not involve WordPress. But why not?

Make no mistake, WordPress _is_ popular—it is said to power more than 40% of all websites on the Internet—and for many, it is simply synonymous with “a website that is easy to setup/maintain and that offers a good content management experience for editors.” But even that solidity is starting to falter, based in part on the changing tech landscape and on the failure of WordPress’ own leadership to support its community of users (more on that unfortunate reality below).

I don’t want to attack WordPress unnecessarily or in a mean-spirited way. It’s not all bad and can even be preferred in some scenarios. But these are the legitimate shortcomings that I have experienced when working with the product from a development and content management standpoint—shortcomings which tend to hinder the ability, for both me and my clients, to build a website that is both an **initial and an ongoing success**.

### 1. WordPress Is Overly Complex

The wide adoption of WordPress and its famous “one click install” have earned it a reputation for being “easy to use” and “beginner friendly.” Such surface-level ease, however, hides what I find to be a very unintuitive architectural model for managing content.

WordPress was first released in 2003 as a blogging platform, and its “vanilla” mode still reflects this outdated starting point. (Let’s not even talk about how the 23-year-old _codebase itself_ looks, but you can imagine.) If you’re not building a blog, you will pretty quickly find yourself reaching for numerous extensions to its base functionality.

Proper _content modeling_ before development will likely reveal that not every element of your content can be satisfactorily mapped onto WordPress’ default “Page” or “Post” types—what, for example, should an “Event” or “Video” content type exist as? And so you’ll need to use Advanced Custom Fields (ACF) to build out custom content types and metadata.

Moreover, all of this customization runs inside a siloed database tied to your specific WordPress installation, which adds unnecessary layers of complexity, like security monitoring, backups, and database versioning. It also makes splitting development between local and production versions of the site difficult, which can mean a slower process of iteration until changes go live.

And then there are the plugins. In my experience, most WordPress sites require at least a dozen third-party plugins to get the functionality desired by most users. These plugins require constant updating and can cause notorious site crashes if not managed properly.

All of this complexity adds up to a certain level of _brittleness_, which can waste costly hours spent troubleshooting failures, and a poor mental abstraction for working with real, robustly modeled content.

### 2. WordPress Gives You Too Much Control

Many WordPress sites will start out relatively clean and uncluttered, despite the tangle of extensions and plugins mentioned above. But over time, I’ve seen many WordPress sites swell into unwieldy behemoths—both on the content management/site administration side, and on the frontend (the part visitors see in the browser) in terms of layouts, designs, and scripts.

This is mostly due to WordPress’ lack of opinionated standards and its carefree ethos of “editors should be able to add or change _anything_ on a site.” You might think that this sounds like a good thing, but in practice, it can end up leading to an inconsistent, bloated site that doesn’t cohere and that performs poorly.

Let’s consider an example: Person A might add some plugin to the site that solves an immediate problem, but then Person B comes along a few years later and, not knowing about the first plugin, adds a second plugin that does basically the same thing. Now there are two competing plugins that need maintaining, which adds overhead and is confusing for other editors. One of these plugins might also inject a massive script on the frontend of the site, which further slows down page loads for visitors. What’s missing here is a lack of opinionated standards on the best way to do things, which the platform doesn’t encourage.

Relatedly, in terms of site design, I’m often asked by clients if they can have more granular control over design elements like text formatting, button colors, and image layouts, to which I hold a gentle but firm boundary: site editors should have almost no control over most design elements, with the exception of very compelling and specific scenarios.

This is not the case with WordPress, which enables editors to make all kinds of arbitrary design and layout changes. Sometimes these can be objectively bad for accessibility—such as allowing the use of `h1` header tags in text blocks simply because they appear larger (even though this could violate proper HTML hierarchy if there is already an `h1` tag on the page). In other cases, it can just be bad for brand consistency—such as allowing a button to be _any_ color rather than a brand color.

As a web designer, I see it as my responsibility, not the client’s, to create attractive, compelling designs that help communicate a site’s core message. This means placing a certain amount of _limitation_ on what a client can add or change, comparative to WordPress. But this is not meant to be _limiting_ in the grand scheme of things; rather, it is meant to empower editors to make ongoing changes that **serve the site** and that allow the site to **grow gracefully** instead of chaotically.

Trust me, you’ll sleep better knowing you can _do less_ to cause problems on your site.

### 3. The WordPress Ecosystem Is Noisy

WordPress has been around for so long that its ecosystem of themes, plugins, and hosting providers can feel overwhelming to a newcomer. If you’re going into one of this areas blind, it may feel like there are way too many options to choose from. How are you supposed to find the best solution that works for you amidst all of this noise?

At its core, WordPress is free to use and extend, but this is an instance where “free” can actually lead to hidden costs. Because the barrier to entry is so low, there are armies of WordPress developers and agencies out there offering custom themes and plugins of vastly divergent quality. In an effort to differentiate from this mass, a second tier then crops up offering “premium” solutions to anything and everything. If you’re not careful, you could end up spending quite a bit on themes, plugins, or custom hosting options to supplement your “free” WordPress instance.

It can be hard to know who and what to trust in this large ecosystem. In contrast, as a consultant, I am able to bring my own tried and true recommendations for most of these considerations before we even begin working together. If we plan properly in the _research and discovery phase_, it is possible to reach solutions collaboratively that set you up for success in the long run.

### 4. WordPress Doesn’t Know Itself

Finally, there is the lamentable state of WordPress’ leadership and its uncertain future direction. I won’t get into too many details here, but suffice it to say, the controversies of the last few years surrounding WordPress’ creator and principal stakeholder / decision-maker, Matt Mullenweg, have raised many red flags. In fights and disagreements with other companies and even with his own employees at Automattic, a primary WordPress hosting company, [Mullenweg has shown himself](https://joshcollinsworth.com/blog/fire-matt#101-matt-talks-taking-over-wp-engine) to be a petty, litigious, bullying, and self-serving actor who holds far too much sway over the product he claims to steward.

Even if I did love WordPress as a product, this fact would give me pause. As anyone living in America knows these days, having an untrustworthy egomaniac at the controls does not inspire confidence in the overall health of the wider project. The current reality is that every WordPress site, although free, exists at the whim of one person’s feelings—which is enough to make me never recommend WordPress in good conscience.

There are better alternatives. There are many open source endeavors in which communities that don’t have a single fail point work together to build tools that work for everyone. There are companies that steward tools and platforms in ways that don’t make you question their continued existence in five or ten years. WordPress is in an existential crisis, and as long as its future is influenced by its current leadership, I can’t fully trust its brand.

## Conclusion

To summarize, I don’t use or recommend WordPress for new websites because I’m not confident in its ability to deliver the best, most future-proofed end product for both my clients and their site users.

But the good news is that WordPress is just a tool, and there are many other tools that I find better suited for the job. When I work with clients, I first try to understand their needs—_why_ they are looking for a new site or upgraded experience and _what_ problems they are trying to solve—before recommending the best set of tools, platforms, and products to accomplish their goals.

If you are interested in what some of those more modern platforms are, stay tuned for the next post in this series, which will take a closer look at those that I work with regularly and recommend.
