# Day 5

Considering only horizontal or vertical lines, determine the number of points where at least two lines overlap.

Given this input:

```
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
```

Only keep lines where `x1 == x2` or `y1 == y2`

```
0,9 -> 5,9
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
0,9 -> 2,9
3,4 -> 1,4
```

There's two cases of line intersection here:

1. A line overlaps with another line -> the intersection > 1 point
2. A line crosses another line -> the intersection == 1 point

The brute force way is to double iterate: for each line, iterate through every other line to see if it intersects.

- I also thought about converting each line to its equation form then doing some math to determine if the lines intersect

What does it mean for a line to intersect? e.g. do these two lines intersect?

```
0,9 -> 5,9
9,4 -> 3,4
```

No, because they're both horizontal and the y values don't match. What about these two lines?

```
9,4 -> 3,4
7,0 -> 7,4
```

- Line 1 is horizontal
- Line 2 is vertical

Yes because line 2's x value is within line 1's x range and line 1's y value is within line 2's y range.

Orthogonal lines intersect if:

- The vertical line's x value is within the horizontal line's x range
- The horizontal line's y value is within the vertical line's y range

The question isn't about _where_ the two lines intersect, only _if_ they do. There are four possible cases since a line can only be vertical or horizontal:

1. The two lines are parallel, so no intersection
2. One line is horizontal and one is vertical, but doesn't intersect
3. One line is horizontal and one is vertical, _one_ point of intersection
4. Lines are parallel and overlaps, > 1 point of intersection

Example of case 4:

```
0,9 -> 5,9
0,9 -> 2,9
```

Three points of intersection here because line 1 ends at (5, 9) and line 2 ends at (2, 9).

This can also be written as:

```
5,9 -> 0,9
0,9 -> 2,9
```

- Tbh it's probably much easier to order them so all lines go from left to right increasing

But what if it doesn't completely overlap?

```
2,9 -> 5,9
0,9 -> 4,9
```

Generally, number of intersection points = the endpoint of line that ends earlier - the start point of other line, or zero, whichever is greater.

Therefore:

- Parser converts text input into an object like `{ x1, x2, y1, y2 }`
  - A `Line` class with a `intersectsWith` method would be nice
- Remove all lines that aren't horizontal or vertical
- Loop through all line pairs, check if each line intersects with any other
- Sum up all intersection points and return that

## Part I

- The ordering gets a bit weird when I'm parsing slanted lines; not sure if the result is exactly what I'm looking for
  - It's fine though because we're not working with slanted lines yet

The example input works totally fine, but the program input fails with "too high". This means I'm either:

- Counting points that aren't actually intersections;
- Double counting points
