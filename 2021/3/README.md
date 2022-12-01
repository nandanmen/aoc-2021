- Loop through each char in the bit number
- Get most common and least common bits for each char for every bit
- Construct gammaRate and epsilonRate as strings
- Convert to decimal when done and multiplty together

I feel like there's a faster way to go about this one because I'm not taking advantage of the fact that it's a binary number — are there bit operations I can perform to get the solution?

3b

```
10111
```

- Oxygen generator rating -> most common bits
- CO2 scrubber rating -> least common bits

Hmm, there might be a better way to do this because my current solution is O(bitLength * n)
