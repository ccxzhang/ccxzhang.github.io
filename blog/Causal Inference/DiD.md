---
title: Difference in Difference
author: Charlie Zhang
tags:
  - Causal Inference
layout: post
---


Assumptions:
1. SUTVA
2. Strict Exogeneity
3. Parallel trends assumption
4. No anticipatory effects 

Difference in Difference combines:
**cross-sectional treatment-control comparisons** and **before-after** studies (MHE, ): 
$$y_{ist}= \gamma_{s} + \lambda_{t} + \beta D_{st} + \epsilon_{ist}$$

where $\lambda_t$ is before/after fixted effects and $E(\epsilon_{ist} \mid s,t) = 0$ and we get:
$$\Delta_{treatment} = E[y_{ist} \mid s = treatment, t = after] - E[y_{ist} \mid s = treatment, t = before] = \lambda_{after} - \lambda_{before} + \beta$$
$$\Delta_{control} = E[y_{ist} \mid s = control, t = after] - E[y_{ist} \mid s = control, t = before] = \lambda_{after} - \lambda_{before}$$

and we have:
$$DiD = \hat{\beta} = \Delta_{treatment} - \Delta_{control}$$

Further considerations ([Fredriksson and Oliveira](https://www.scielo.br/j/rmj/a/KhRXgcqvzFcRFmtfZB5zF7b/?lang=en&format=html), 2019):
1. **Using control variables for a more robust identiﬁcation**
- "The main reason for including also individual level controls ($X_{ist}$) is instead to decrease the variance of the regression coefﬁcient estimates"

2. **Standard Errors**
- Serial correlation ([Bertrand, Duflo, Mullainathan, 2004](https://doi.org/10.1162/003355304772839588))
    - DD estimation usually relies on fairly long time series with an average of 16.5 periods in the surveyed papers;
    - "The most commonly used dependent variables in DD estimation are typically highly positively serially correlated;"
    - "An intrinsic aspect of the DD model, the treatment variable $I_{st}$ changes itself very little within a state over time"
- 

3. **Balancing Tests for Changes in Composition** ([Wing, Simon, and Bello-Gomez, 2018](https://www.annualreviews.org/doi/pdf/10.1146/annurev-publhealth-040617-013507), p.459-460) #balancing_test
- Not like RCT and matching studies, in which distribution of covariates is similar in treatment and control groups;
- "What matters for DiD validity is 1) differences between the two groups are stable over time and 2) the changes in treatment exposure are not associated with changes in the distribution of covariates
- Empirically, one way is to estimate covariate balance regressions
    - Covariate $C_{gt}$ associated with group $g$ in period $t$, and a simple way to "test for problematic composition changes is to replace the outcome variable with the covariate and ﬁt the standard DID regression model"
    - Mathematically: $C_{gt}= a_g+ b_t+ D_{gt}\delta^{'}+ \varepsilon_{gt}$;
    - Under the null hypothesis there there are no compositional changes, we expect $\delta^{'} = 0$, and it is sensible to consider the magnitude of the change in composition rather than the pure statistical signiﬁcance of the coefﬁcient estimate;

Alternative Approach:
4. **Diﬀerence-in-Diﬀerence-in-Diﬀerences** (Triple Differences) #ddd
- allows the same two groups from another (“untreated”) state as an additional control;