var ppl = {};

for (let i = 1; i < 21; i++) {
    ppl[i] = [];
}
var oGroups = {};
var settings = ['a','b','c','d']
for (let j = 0; j < settings.length; j++) {
    var groups = [];
    var ppl2 = { ...ppl };
    for (let i = 0; i < 5; i++) {
        var pariticipants = 0;
        groups = [];
        var currGroup = `${settings[j]}${i}`;
        var keys = Object.keys(ppl2);
        keys.sort(()=> Math.random()-0.5)
        keys.forEach(person => {
            if (pariticipants >= 4) return;
            if (ppl2[person].length > 0 ? ppl2[person].some(g => groups.includes(g)) : 0) return;
            groups = [...groups, ...ppl2[person]];
            // console.log(groups);
            ppl[person].push(currGroup);
            oGroups[currGroup] = oGroups[currGroup] ? [...oGroups[currGroup],person] : [person];
            delete ppl2[person];
            pariticipants++;
        })
    }
}


console.log(JSON.stringify(ppl));
console.log(JSON.stringify(oGroups));
