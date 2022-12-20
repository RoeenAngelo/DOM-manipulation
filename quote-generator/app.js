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
    quote: `"You have no responsibility to live up to what other people think you ought to accomplish.

    I have no responsibility to be like they expect me to be. It's their mistake, not my failing."`,
    
    author: `Richard Feynman`
},
{
    quote: `"Never postpone a good deed which you can do now because death does not choose whether you have or haven’t done the things you should have done. Death waits for nobody and nothing. It has neither enemies, nor friends."`,
    
    author: `Indian Proverb`
},
{
    quote: `"Every action is a vote for the type of person you wish to become."`,
    
    author: `James Clear`
},
{
    quote: `"Your success depends on the risks you take.

    Your survival depends on the risks you avoid."`,
    
    author: `James Clear`
},
{
    quote: `"The way to attract good luck is to be reliable in a valuable area.

    The more you repeatedly deliver value, the more people seek you out for that value.
    
    Your reputation is a magnet. Once you become known for something, relevant opportunities come to you with no extra work."`,
    
    author: `James Clear`
},
{
    quote: `"Almost everything will work again if you unplug it for a few minutes, including you."`,
    
    author: `Anne Lamott`
},
{
    quote: `"At the higher levels of competitive swimming, something like an inversion of attitude takes place. The very features of the sport that the 'C' swimmer finds unpleasant, the top level swimmer enjoys. What others see as boring—swimming back and forth over a black line for two hours, say—they find peaceful, even meditative, often challenging, or therapeutic. They enjoy hard practices, look forward to difficult competitions, try to set difficult goals. Coming into the 5:30 A.M. practices at Mission Viejo, many of the swimmers were lively, laughing, talking, enjoying themselves, perhaps appreciating the fact that most people would positively hate doing it. It is incorrect to believe that top athletes suffer great sacrifices to achieve their goals. Often, they don’t see what they do as sacrificial at all. They like it."`,
    
    author: `Daniel Chambliss`
},
{
    quote: `"Ultimately, the only way to truly be in control of your life is to be in control of your thoughts."`,
    
    author: `James Clear`
},
{
    quote: `"Slow and steady often wins because it keeps you motivated.

    Take on manageable challenges and you'll get frequent signals of progress. Bite off more than you can chew and progress stalls.
    
    When you make progress, you want to keep going. When you break progress, you want to stop."`,
    
    author: `James Clear`
},
{
    quote: `"When you say no, you are only saying no to one option. When you say yes, you are saying no to every other option.

    No is a choice. Yes is a responsibility."`,
    
    author: `James Clear`
},
{
    quote: `"It’s not the existence of beliefs that is the problem, but what happens to us when we hold them rigidly, without examining them, when we presume the absolute centrality of our views and become disdainful of others."`,
    
    author: `Sharon Salzberg`
},
{
    quote: `"Entrepreneurship is a personal growth engine disguised as a business pursuit"`,
    
    author: `James Clear`
},
{
    quote: `"The 3 Levels of Employees:

    Level 1 — You do what you are asked to do.
    
    Level 2 — Level 1 + You think ahead and solve problems before they happen.
    
    Level 3 — Level 2 + You proactively look for areas of opportunity and growth in the business, and figure out how to tap into them."`,
    
    author: `James Clear`
},
{
    quote: `"The more control you have over your attention, the more control you have over your future."`,
    
    author: `James Clear`
},
{
    quote: `"Every single qualification for success is acquired through habit. People form habits and habits form futures. If you do not deliberately form good habits, then unconsciously you will form bad ones. You are the kind of person you are because you have formed the habit of being that kind of person, and the only way you can change is through habit."`,
    
    author: `Albert Gray`
},
{
    quote: `"People ask me, ‘What is the use of climbing Mount Everest?’ and my answer must at once be, ‘It is of no use.' There is not the slightest prospect of any gain whatsoever. Oh, we may learn a little about the behavior of the human body at high altitudes, and possibly medical men may turn our observation to some account for the purposes of aviation. But otherwise nothing will come of it. We shall not bring back a single bit of gold or silver, not a gem, nor any coal or iron… If you cannot understand that there is something in man which responds to the challenge of this mountain and goes out to meet it, that the struggle is the struggle of life itself upward and forever upward, then you won’t see why we go. What we get from this adventure is just sheer joy. And joy is, after all, the end of life. We do not live to eat and make money. We eat and make money to be able to live. That is what life means and what life is for."`,
    
    author: `George Mallory`
},
{
    quote: `"Motion does not equal action. Busyness does not equal effectiveness."`,
    
    author: `James Clear`
},
{
    quote: `"When people say they don’t want to change what they really mean is they don’t have an incentive to change"`,
    
    author: `James Clear`
},
{
    quote: `"Every action you take is a vote for the type of person you wish to become.

    No single instance will transform your beliefs, but as the votes build up, so does the evidence of your identity.
    
    This is why habits are crucial. They cast repeated votes for being a certain type of person."`,
    
    author: `James Clear`
},
{
    quote: `"Once I got into space, I was feeling very comfortable in the universe. I felt like I had a right to be anywhere in this universe, that I belonged here as much as any speck of stardust, any comet, any planet."`,
    
    author: `Mae Jemison`
},
{
    quote: `"Not everything that is faced can be changed, but nothing can be changed until it is faced."`,
    
    author: `James Baldwin`
},
{
    quote: `"Stop worrying about how long it will take and get started. Time will pass either way."`,
    
    author: `James Clear`
},
{
    quote: `"What is the real goal?

    The real goal is not to “beat the market.” The goal is to build wealth.
    
    The real goal is not to read more books. The goal is to understand what you read.
    
    Don’t let a proxy become the target. Don’t optimize for the wrong outcome."`,
    
    author: `James Clear`
},
{
    quote: `"Without hard work, a great strategy remains a dream.

    Without a great strategy, hard work becomes a nightmare."`,
    
    author: `James Clear`
},
{
    quote: `"Concentrate all your thoughts upon the work at hand. The sun’s rays do not burn until brought to a focus."`,
    
    author: `Alexander Graham Bell`
},
{
    quote: `"It is better to start as a fool and learn from your mistakes than to fake being a genius and ignore your errors."`,
    
    author: `James Clear`
},
{
    quote: `"Be forgiving with your past self.

    Be strict with your present self.
    
    Be flexible with your future self."`,
    
    author: `James Clear`
},
{
    quote: `"Action forces prioritization.

    If you're stuck deciding between options, force yourself to act. You can only act on one thing at a time, which means you will have to make something the top priority.
    
    Even if you pick wrong, you'll learn something."`,
    
    author: `James Clear`
},
{
    quote: `"It costs nothing to ask a successful person how they succeeded, but it may deliver more value than 1,000 hours of hard work.

    Others are under no obligation to tell you their secrets, but it is surprising how much you can learn from sincere, direct, and thoughtful questions."`,
    
    author: `James Clear`
},
{
    quote: `"Don’t spend what you haven’t earned.

    Avoid financial debt. Don’t spend money you haven’t earned.
    
    Avoid social debt. Don’t spend goodwill you haven’t earned.
    
    Avoid calendar debt. Don’t spend (free) time you haven’t earned.
    
    The disciplined earner can be a guilt-free spender."`,
    
    author: `James Clear`
},
{
    quote: `"It’s crazy how 1,000 people can compliment you and you’ll spend all day thinking about the one person who criticized you."`,
    
    author: `James Clear`
},
{
    quote: `"What looks like talent is often careful preparation.

    What looks like skill is often persistent revision."`,
    
    author: `James Clear`
},
{
    quote: `"The 4 qualities of a great career:

    1) I enjoy it
    2) I’m good at it
    3) I make good money 
    4) I’m around fascinating people
    
    Answer in reverse order:
    
    1) Where are fascinating people?
    2) In what ways can I make money with them?
    3) Which ones am I good at?
    4) Which ones do I enjoy?"`,
    
    author: `James Clear`
},
{
    quote: `"Most people think they lack motivation when they really lack clarity"`,
    
    author: `James Clear`
},
{
    quote: `"Rowing harder doesn't help if the boat is headed in the wrong direction."`,
    
    author: `Kenichi Ohmae `
},
{
    quote: `"An expert is a person who has found out by painful experience all the mistakes that one can make in a very narrow field."`,
    
    author: `Niels Bohr`
},
{
    quote: `"Do the most important thing first each day and you'll never have an unproductive day."`,
    
    author: `James Clear`
},
{
    quote: `"Lack of confidence kills more dreams than lack of ability.

    Talent matters—especially at elite levels—but people talk themselves out of giving their best effort long before talent becomes the limiting factor.
    
    You're capable of more than you know. Don't be your own bottleneck."`,
    
    author: `James Clear`
},
{
    quote: `"Entrepreneur’s mind.
    Athlete’s body.
    Artist’s soul."`,
    
    author: `James Clear`
},
{
    quote: `"I always say that I'll go first...

    That means if I'm checking out at the store, I'll say hello first.
    
    If I'm coming across somebody and make eye contact, I'll smile first.
    
    [I wish] people would experiment with that in their life a little bit. Be first, because – not all times, but most times – it comes in your favor."`,
    
    author: `Gabby Reece`
},
{
    quote: `"The whole secret of life is to be interested in one thing profoundly and a thousand other things well."`,
    
    author: `Hugh Walpole`
},
{
    quote: `"Be "selectively ignorant."

    Ignore topics that drain your attention.
    
    Unfollow people that drain your energy.
    
    Abandon projects that drain your time.
    
    Do not keep up with it all. The more selectively ignorant you become, the more broadly knowledgable you can be."`,
    
    author: `James Clear`
},
{
    quote: `"Reading can teach you the best of what others already know.

    Reflection can teach you the best of what only you can know."`,
    
    author: `James Clear`
},
{
    quote: `"The math of success...

    Results = (Hard Work*Time)^Strategy
    
    Working hard is important, but working on the right thing is more important. A great strategy can deliver exponential results.
    
    Of course, the best strategy is worth nothing if you never get to work. Zero to the millionth power is still zero."`,
    
    author: `James Clear`
},
{
    quote: `"Life shrinks or expands in proportion to one's courage."`,
    
    author: `Anais Nin`
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
},
{
    quote: `""`,
    
    author: ``
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