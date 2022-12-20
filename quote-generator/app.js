let btn = document.querySelector('button');
console.log(btn);

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
    {
    quote: `"Life is too short to not be pursuing the best opportunity you know of."`,
    
    author: `James Clear`
},
{
    quote: `"Today might be the best chance you have to take action.

    The longer you wait, the more deeply embedded you get in your current lifestyle.
    
    Your habits solidify. Your beliefs harden. You get comfortable.
    
    It will never be easy, but it may also never be easier than it is right now."`,
    
    author: `James Clear`
},
{
    quote: `"he real problem of humanity is the following: we have paleolithic emotions; medieval institutions; and god-like technology."`,
    
    author: `E.O. Wilson`
},
{
    quote: `"Praise others. It will bring them peace of mind.

    Do not expect others to praise you. It will bring you peace of mind."`,
    
    author: `James Clear`
},
{
    quote: `"Whenever you see an overnight success, your eyes deceive you.

    What you are witnessing is the hour of opportunity unleashing the potential energy of previous choices. It was not one decision, but the accumulated power of all that came before.
    
    The fuse was lit on a loaded cannon."`,
    
    author: `James Clear`
},
{
    quote: `"You are richer than 93% of people.

    Not in money, but in time. 108 billion people have lived throughout history. 93% of them are dead.
    
    You have what every king and queen, every pharaoh and ruler, every CEO and celebrity of the past would give all their wealth for:
    
    Today."`,
    
    author: `James Clear`
},
{
    quote: `"There's a myth that learning is for young people. But as the proverb says, 'It's what you learn after you know it all that counts.' The middle years are great, great learning years. Even the years past the middle years. I took on a new job after my 77th birthday – and I'm still learning. Learn all your life. Learn from your failures. Learn from your successes, When you hit a spell of trouble, ask 'What is it trying to teach me?' The lessons aren't always happy ones, but they keep coming."`,
    
    author: `John Gardner`
},
{
    quote: `"Success is never due to one thing, but failure can be.

    Sleeping well won’t make you successful, but not sleeping enough will hold you back. Hard work is rarely enough without good strategy, but even the best strategy is useless without hard work.
    
    Many things are necessary, but not sufficient for success."`,
    
    author: `James Clear`
},
{
    quote: `"When failure is expensive, plan carefully.

    When failure is cheap, act quickly."`,
    
    author: `James Clear`
},
{
    quote: `"The person who learns the most in any classroom is the teacher.

    If you really want to learn a topic, then "teach" it. Write a book. Teach a class. Build a product. Start a company.
    
    The act of making something will force you to learn more deeply than reading ever will."`,
    
    author: `James Clear`
},
{
    quote: `"Do not wait. If there is something you wish to do, go do it.

    Death comes for busy people too. It will not pause and return at a more convenient time."`,
    
    
    author: `James Clear`
},
{
    quote: `"Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials."`,
    
    author: `Lin Yutang`
},
{
    quote: `""`,
    
    author: ``
},

]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = `- ${quotes[random].author}`
})