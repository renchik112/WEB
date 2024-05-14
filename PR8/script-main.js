(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            speakGoodBye.speak(name);
        } else {
            speakHello.speak(name);
        }
    }

    function sortNames(names) {
        return names.sort();
    }
    function printNames(names) {
    for (let name of names) {
        console.log(name);
    }
    }
    var sortedNames = sortNames(names);
    printNames(sortedNames);
})();