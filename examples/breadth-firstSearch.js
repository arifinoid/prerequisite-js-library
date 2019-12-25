// tyler -> henry, john, aimee
// henry -> peggy, keli
// john -> keli
// aimee -> ...

// peggy -> ...
// keli -> claire

const graph = {};
graph.tyler = [
  { id: "henry", dog: false },
  { id: "john", dog: false },
  { id: "aimee", dog: false }
];
graph.henry = [
  { id: "peggy", dog: false },
  { id: "keli", dog: false }
];
graph.john = [{ id: "keli", dog: false }];
graph.aimee = [];
graph.peggy = [];
graph.keli = [{ id: "claire", dog: false }];
graph.claire = [];

function search(name) {
  let searchQueue = [].concat(graph[name]);
  let searched = [];
  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (!searched.find(n => n.id === person.id)) {
      if (person.dog) return `${person.id} has a dog`;
      else {
        searchQueue = searchQueue.concat(graph[person.id]);
        searched.push(person);
      }
    }
  }
  return "There are no friends that have a dog";
}

console.log(search("tyler"));

// In order to find the shortest path person that owns a dog, we need to work with a queue data structure. Queues work exactly as they do in real life. Unlike in recursion, where it's first in last out, QUEUES ARE FIRST IN FIRST OUT. They work the same as stacks. You can't access random elements in the queue. Instead, there are only two operations, N queue and D queue
