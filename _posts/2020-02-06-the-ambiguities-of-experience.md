---
layout: single
title:  "The Ambiguities of Experience"
date:   2021-02-06
categories: [summary, book]
---

<p align="center">
    <img src="/assets/images/2021-02-06-the-ambiguities-of-experience/the-ambiguities-of-experience.jpg" alt="drawing"/>
</p>

Understanding how human beings understand the world is attractive. Especially for people like me that are interested in machine learning and data mining. The mechanism of human understanding can inspire us to improve how machine learn things, and then we can quickly scale out the capability of knowledge learning due to machine nature.

I had some vague thoughts on how human beings learn the knowledge from an amateur's perspective. This book validates a lot of such thoughts from an expert perspective, organizes them in a much better structure, and presents them in an intuitive way.

As summarized, human beings have two major sources of learning from experiences: ****Learning through replicating success**, and **learning through stories and models**.

## Learning through replicating success
Learning through replicating success is a way to learn the knowledge via direct experience. The steps of learning through replicating success can be summarized in three steps:
1. Take an action by choosing an alternative from the available options.
2. Observe the outcome and evaluate it in terms of its success.
3. Replicate the choice of alternatives associated with success more often than the choice of alternatives associated with failure.

There are maining three mechanism for learning through replicating success:
* **Trial-and-error learning**: Learning replicates success by modifying rules so as to repeat successful actions more readily than unsuccessful actions.
* **Imitation**: Replicates success by having actions associated with success when executed by one actor imitated by another actor.
* **Selection**: Replicates success by reproducing attributes associated with success and eliminating attributes associated with failure.

If you are familiar with machine learning, you will find all of the three approaches have been adapted to this area successfully. 

Trial-and-error is the foundation of the **reinforcement learning**, a machine learning mechanism tries to "adapt" the environment (quantified by maximizing the long-term cumulative rewards) by interacting with using curated actions. Reinforcement learning has been discussed for a long time in the academia, and it draws increasing attention in the industry over the past decade due to the popularity of AI. A history of reinforcement learning can be seen from the [book chapter](http://incompleteideas.net/book/first/ebook/node12.html) of "Reinforcement learning: An introduction" written by Sutton and Barto.

The counterpart of imitation in machine learning is **imitation learning**. It is arguably to be considered as a sub-domain of reinforcement learning. Instead of learning from the reward received by taking actions, an expert would provide the learner (agent) a set of demonstrations, and the agent tries to learn the optimal policy by imitating the expert's decision. Imitation learning is an emerging machine learning domain that has promising applications in robotics.

Selection has been adapted by the machine learning domain for a long time already. **Evolutionary algorithms** once was a hot topic in the academia before neural networks. It leverages the computer programs to mimic the evolution of the creatures, and defines the adaptability to quantify how good the current generation of algorithm can solve the target problem. 

## Learning through stories and models
Learning through stories and models are considered to be a complementary way of learning through replicating success. This is because any individual has limited exposure of the environment and has limited amount of direct experience to gain. Moreover, learning through replicating success neglects the explicit understandings of causal relationships among the actions and outcomes, while learning through stories and models tries to resolve this with reasoning.

An common application of learning through stories and models are learning through books. Books contains the information with knowledge that are summarized and distilled from the first-hand experience. The readers can absorb the knowledge without direct experience. The summarized knowledge are usually represented in the form of stories and models, and in most of the time they are simplified to cater the limited cognitive abilities of human beings.

## Limitation of learning through experience
Experience is a great teacher, however, it is not perfect due to its ambiguity. The ambiguity of experience has many causes and takes many forms, but a significant fraction of them can be summarized as follows:

* **The causal structure of experience is complex**. Many uncontrolled variables are involved, and their relations include multiple interactions and multiple co-linearities.
* **Experience is noisy**. The events of history are drawn from a distribution of possibilities, either because of errors in observation or interpretation or because the causal structure is truly stochastic.
* **History includes numerous examples of endogeneity**. The world is shaped and adapted by the actions that are taken onto it. Any action can be rationalized by the outcome of the consequence to some degree.
* **History as it is known is constructed by participants and observers**. Individuals learn not from history but from historical stories. Those stories are somewhat biased intentionally or unintentionally.
* **History is miserly in providing experience**. It offers only small samples and thus large sampling error in the inferences formed.