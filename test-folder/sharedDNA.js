const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2 && percentSharedDNA < 6) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0 && percentSharedDNA < 3) {
        return 'You are likely 3rd cousins'
    } else {
    return 'You are likely not related.'
    }
}

console.log(whatRelation(34))
console.log(whatRelation(3))
