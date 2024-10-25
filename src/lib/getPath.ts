import { Point, UnWeightedPoint } from "./interface";

export function getPath(points: Array<UnWeightedPoint>, numPersons: number) {
  const weightedPoints = normalizeToWeights(points);

  const paths = weightedNearestNeighborPath(weightedPoints, numPersons);
  return paths;
}

export function weightedNearestNeighborPath(
  points: Point[],
  numPersons: number,
) {
  // Sort points by their weight in descending order (highest priority first)
  points.sort((a, b) => b.weight - a.weight);

  const paths: Point[][] = Array.from({ length: numPersons }, () => []); // Create paths for each person
  const remainingPoints = [...points]; // Copy points to manage remaining points

  // Initialize current positions for each person (start with the highest-priority point)
  const currentPositions = remainingPoints.splice(0, numPersons);
  for (let i = 0; i < numPersons; i++) {
    paths[i].push(currentPositions[i]); // Assign starting point to each person's path
  }

  while (remainingPoints.length > 0) {
    for (let personIndex = 0; personIndex < numPersons; personIndex++) {
      let currentPoint = paths[personIndex][paths[personIndex].length - 1]; // Get the last point in the person's path
      let closestIndex = -1;
      let minDistance = Infinity;

      // Find the nearest point for the current person
      for (let i = 0; i < remainingPoints.length; i++) {
        const dist = distanceSquared(
          currentPoint.coords,
          remainingPoints[i].coords,
        );

        // Comparing the distances, taking into account the weight
        if (
          dist / remainingPoints[i].weight <
          minDistance * remainingPoints[i].weight
        ) {
          minDistance = dist;
          closestIndex = i;
        }
      }

      // Move the nearest point to the person's path if found
      if (closestIndex !== -1) {
        currentPoint = remainingPoints.splice(closestIndex, 1)[0];
        paths[personIndex].push(currentPoint);
      }
    }
  }

  return paths; // Return the paths for all persons
}

// Utils

// Function to find the squared distance between 2 co-ordinates
function distanceSquared(p1: Array<number>, p2: Array<number>) {
  const dx = p1[0] - p2[0];
  const dy = p1[1] - p2[1];
  return dx * dx + dy * dy;
}

const durationToWeight = {
  30: 0.9,
  60: 0.5,
  90: 0.3,
  120: 0.2,
};
type durationToWeightKey = keyof typeof durationToWeight;
export function normalizeToWeights(points: Array<UnWeightedPoint>) {
  const newArray = [];
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (point.duration > 120) {
      newArray.push({
        coords: point.coords,
        weight: 0.1,
      });
    } else {
      newArray.push({
        coords: point.coords,
        weight: durationToWeight[point.duration as durationToWeightKey],
      });
    }
  }
  return newArray;
}

export function singleWeightedNearestNeighborPath(points: Array<Point>) {
  // Sort points by their weight in descending order (highest priority first)
  points.sort((a, b) => b.weight - a.weight);

  const path = [points[0]]; // Start from the highest-priority point
  const remainingPoints = points.slice(1); // Exclude the starting point

  let currentPoint = path[0];
  while (remainingPoints.length > 0) {
    let closestIndex = 0;
    let minDistance = Infinity;

    // Find the nearest point to the current point within the remaining points
    for (let i = 0; i < remainingPoints.length; i++) {
      const dist = distanceSquared(
        currentPoint.coords,
        remainingPoints[i].coords,
      );

      // Comparing the distances, while takikg into account of the weight
      if (
        dist / remainingPoints[i].weight <
        minDistance * remainingPoints[i].weight
      ) {
        minDistance = dist;
        closestIndex = i;
      }
      //console.log("dist - ", dist)
      //console.log(minDistance - remainingPoints[i].weight * 10)
    }

    // Move the nearest point to the path
    currentPoint = remainingPoints.splice(closestIndex, 1)[0];
    path.push(currentPoint);
  }

  return path;
}
