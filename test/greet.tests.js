// console.log(greet("Sbonga"));
// console.log(greet("Nala"));
// console.log(greet("Philile"));

describe('Test my greet function' , function(){
    it("it should return 'Hello, Lwazi' when called with 'Lwazi' " , function(){

        assert.equal("Hello, Lwazi", greet("Lwazi"), "this should not be true");

    });

    it("it should return 'Hello, Sizwe' when called with 'Sizwe' " , function(){
        
        assert.equal("Hello, Sizwe", greet("Sizwe"), "this should not be true");
        
        // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return 'Hello, Lihle' when called with 'Lihle' " , function(){

        assert.equal("Hello, Lihle", greet("Lihle"), "this should not be true");

    });
});