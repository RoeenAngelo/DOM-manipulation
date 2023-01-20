let btn = document.querySelector('button');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = `- ${quotes[random].author}`
})

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
    quote: `"The feeling of progress is one of the best feelings of all. This is true even when progress is small."`,
    
    author: `James Clear`
},
{
    quote: `"Many people work hard, but few people work on the highest and best thing.

    Usually, it takes no more effort to work on high leverage tasks than it does to work on low leverage ones.
    
    It's just a matter of directing your energy."`,
    
    author: `James Clear`
},
{
    quote: `"Not enough is said about the power of thinking about one topic for a long period of time.

    If you revisit a topic continually for a few years, most problems (and many solutions) will occur to you at some point.
    
    Expertise can be the gradual accumulation of many modest insights."`,
    
    author: `James Clear`
},
{
    quote: `"To keep is more important than to make friends. Select those that will wear well; if they are new at first, it is some consolation they will become old...

    There is no desert like living without friends. Friendship multiplies the good of life and divides the evil. It is the sole remedy against misfortune, the very ventilation of the soul."`,
    
    author: `Balthasar Gracian`
},
{
    quote: `"If you genuinely care about the goal, you’ll focus on the system."`,
    
    author: `James Clear`
},
{
    quote: `"Successes are revised mistakes."`,
    
    author: `James Clear`
},
{
    quote: `"Amazing social skills are a superpower.

    The ability to deliver bad news in a good way is a superpower.
    
    The ability to de-escalate a tense situation into a calm one is a superpower.
    
    The ability to transform a lose/win situation into a win/win situation is a superpower."`,
    
    author: `James Clear`
},
{
    quote: `"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."`,
    
    author: `John F. Kennedy`
},
{
    quote: `"Just have one good day. Then repeat."`,
    
    author: `James Clear`
},
{
    quote: `"Things that keep talented people from fulfilling their potential:

    - Trying to please everyone
    - Imitating the desires of others
    - Chasing status without questioning why
    - Playing superhero and trying to do it all alone
    - Dividing your attention between too many projects"`,
    
    author: `James Clear`
},
{
    quote: `"When I notice myself worrying about “what other people will think” I find I’m usually not worried about any single person’s opinion.

    If I pick a specific person, I‘m rarely concerned about what they will think.
    
    What I fear is the collective opinion in my head. It’s imaginary."`,
    
    author: `James Clear`
},
{
    quote: `"Self-esteem is just the reputation that you have with yourself. You'll always know."`,
    
    author: `Naval Ravikant`
},
{
    quote: `"Instead of working toward retirement, work toward your ideal lifestyle. There is usually a path to get there in a few years instead of a few decades."`,
    
    author: `James Clear`
},
{
    quote: `"It’s usually more important to be in the right room than to be the smartest person in the room.

    A person with great judgement and average intelligence will usually beat someone with great intelligence and average judgment.
    
    Judgment is knowing what room to be in."`,
    
    author: `James Clear`
},
{
    quote: `"Improvement is a battle that must be fought anew each day.

    Your next workout doesn't care how strong your last one was.
    
    Your next essay doesn't care how popular your last one was.
    
    Your next investment doesn't care how smart your last one was.
    
    Your best effort, again."`,
    
    author: `James Clear`
},
{
    quote: `"What they call you is one thing. What you answer to is something else."`,
    
    author: `Lucille Clifton`
},
{
    quote: `"I rarely have good ideas. 
    ​
    To overcome this limitation, I think about one topic (like habits) for an unreasonable amount of time. Then, I revise, revise, revise until only the best stuff remains. It’s slow, but it works.
    ​
    You can either be a genius or you can be patient."`,
    
    author: `James Clear`
},
{
    quote: `"You can attract luck simply by sharing your work publicly."`,
    
    author: `James Clear`
},
{
    quote: `"For a few weeks, I started each morning by writing “What do I actually want?” at the top of a blank page.
    ​
    It’s surprising how useful it is to keep asking the same question. Each time, my answer became more precise.
    ​
    Once I knew what I wanted, I turned it into action steps."`,
    
    author: `James Clear`
},
{
    quote: `"A ship is safe in a harbor, but that is not what ships are built for."`,
    
    author: `John Shedd`
},
{
    quote: `"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else — you are the one who gets burned."`,
    
    author: `Buddhist Proverb`
},
{
    quote: `"Rome wasn’t built in a day, but they were laying bricks every hour.

    You don’t have to do it all today. Just lay a brick."`,
    
    author: `James Clear`
},
{
    quote: `"School requires you to learn about things after the answer has already been decided.

    Life requires you to learn about things while the answer is in the process of being decided."`,
    
    author: `James Clear`
},
{
    quote: `"Clarity is the elimination of mental clutter.

    Agility is the elimination of physical clutter.
    
    Tranquility is the elimination of spiritual clutter."`,
    
    author: `James Clear`
},
{
    quote: `"Living things tend to change unrecognizably as they grow. Who would deduce the dragonfly from the larva, the iris from the bud, the lawyer from the infant?

    Flora or fauna, we are all shapeshifters and magical reinventors. Life is really a plural noun, a caravan of selves."`,
    
    author: `Diane Ackerman`
},
{
    quote: `"Greatness is consistency.

    Meditating once is common. Meditating daily is rare.
    
    Exercising today is simple. Training every week is simply remarkable.
    
    Writing one essay rarely matters. Write every day and you're practically a hero.
    
    Unheroic days can make for heroic decades."`,
    
    author: `James Clear`
},
{
    quote: `"An approach that has worked well for me: Friendly, but persistent."`,
    
    author: `James Clear`
},
{
    quote: `"People generally have more control over their actions than their feelings.

    But we can influence our feelings by taking action.
    
    Take one small step. Move the body first and the mind will follow."`,
    
    author: `James Clear`
},
{
    quote: `"I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain."`,
    
    author: `James Baldwin`
},
{
    quote: `"There is a wonderful, almost mystical, law of nature that says three of the things we want most—happiness, freedom, and peace of mind—are always attained when we give them to others. Give it away to get it back."`,
    
    author: `John Wooden`
},
{
    quote: `"New goals don't deliver new results. New lifestyles do.

    And a lifestyle is a process, not an outcome.
    
    For this reason, your energy should go into building better habits, not chasing better results."`,
    
    author: `James Clear`
},
{
    quote: `"Some things are better off ignored than attacked.

    Attention is the oxygen of conflict. When you fight a problem, you breathe life into it. When you starve a problem of your attention, you suffocate it.
    
    In a surprising number of cases, the way to solve a problem is to ignore it."`,
    
    author: `James Clear`
},
{
    quote: `"The events of your past are fixed. The meaning of your past is not.

    The influence of every experience in your life is determined by the meaning you assign to it.
    
    Assign a more useful meaning to your past and it becomes easier to take a more useful action in the present."`,
    
    author: `James Clear`
},
{
    quote: `"Everything good needs time. Don’t do work in a hurry. Go into details; it pays in every way. Time means power for your work. Mediocrity is always in a rush; but whatever is worth doing at all is worth doing with consideration. For genius is nothing more nor less than doing well what anyone can do badly."`,
    
    author: `Amelia Barr`
},
{
    quote: `"Italy is known for tomatoes. Thailand for chilies. Germany for sauerkraut.

    But tomatoes originated in Peru. Thailand imported chilies from Central America. Sauerkraut started in China.
    
    Everything is a remix—and the world is better for it. Share what you know. Learn from others."`,
    
    author: `James Clear`
},
{
    quote: `"Habits are the compound interest of self-improvement.

    A small habit—when repeated consistently—grows into something significant."`,
    
    author: `James Clear`
},
{
    quote: `"People who excel tend to obsess over the details.

    People who struggle also tend to obsess over the details.
    
    The difference is what details they focus on. Minutiae vs polish.
    
    Most things don’t matter—but when it does, you want to get the details right."`,
    
    author: `James Clear`
},
{
    quote: `"When people hesitate to give honest feedback on an idea, draft, or performance, I ask for a 0-10 score.

    No one ever says 10. Then I ask how I can get closer to a 10.
    
    It motivates them to start coaching me – and motivates me to be coachable. I want to learn how to close the gap."`,
    
    author: `Adam Grant`
},
{
    quote: `"Fear of failure is higher when you're not working on the problem.

    If you are taking action, you are less worried about failure because you realize you can influence the outcome."`,
    
    author: `James Clear`
},
{
    quote: `"It's almost always better to learn from peers who are 2 years ahead of you than mentors who are 20 years ahead of you.

    Life evolves and most insights get outdated."`,
    
    author: `James Clear`
},
{
    quote: `"Maintain a margin of safety—even when it’s going well.

    Rich people go bankrupt chasing even more wealth.
    
    Fit people get injured chasing personal records.
    
    Productive people become ineffective taking on too many projects.
    
    Don’t let your ambition ruin your position."`,
    
    author: `James Clear`
},
{
    quote: `"A simple rule for life and work:

    Don’t rush, but don’t wait.
    
    Thoughtful action."`,
    
    author: `James Clear`
},
{
    quote: `"Your life is purchased by where you spend your attention."`,
    
    author: `James Clear`
},
{
    quote: `"The Process:

    1) Decide what you want to achieve.
    2) Try different ways of achieving it until you find one that works for you.
    3) Do more of what works. Do less of what doesn’t.
    4) Don’t stop doing it until it stops working.
    5) Repeat."`,
    
    author: `James Clear`
},
{
    quote: `"If you never fail, you’re only trying things that are too easy and playing far below your level... If you can’t remember any time in the last six months when you failed, you aren’t trying to do difficult enough things."`,
    
    author: `Eliezer Yudkowsky`
},
{
    quote: `"Whenever you are stuck searching for the optimal plan, remember:

    Getting started changes everything."`,
    
    author: `James Clear`
},
{
    quote: `"The desire to improve does not have to come from a place of self-loathing."`,
    
    author: `James Clear`
},
{
    quote: `"The teacher learns more than the student.

    The author learns more than the reader.
    
    The speaker learns more than the attendee.
    
    The way to learn is by doing."`,
    
    author: `James Clear`
},
{
    quote: `"Find out who you are and do it on purpose."`,
    
    author: `Dolly Parton`
},
{
    quote: `"We are in the habit of imagining our lives to be linear, a long march from birth to death in which we mass our powers, only to surrender them again, all the while slowly losing our youthful beauty. This is a brutal untruth. Life meanders like a path through the woods. We have seasons when we flourish and seasons when the leaves fall from us, revealing our bare bones. Given time, they grow again."`,
    
    author: `Katherine May`
},
{
    quote: `"How did you accomplish that?"

    "Same as everything else. Gradually, then all at once."`,
    
    author: `James Clear`
},
{
    quote: `"Books for mindset.

    Quiet time to think for strategy.
    
    Conversations with successful peers for tactics."`,
    
    author: `James Clear`
},
{
    quote: `"In many cases, the bottleneck to achieving results is simply making the time to do the work.

    You're capable of exercising, but are you making the time?
    
    You're capable of writing, but are you making the time?
    
    You're capable of reading, but are you making the time?"`,
    
    author: `James Clear`
},
{
    quote: `"More effort is wasted doing things that don’t matter than is wasted doing things inefficiently.

    Elimination is the highest form of optimization."`,
    
    author: `James Clear`
},
{
    quote: `"We cannot predict the value our work will provide to the world. That’s fine. It is not our job to judge our own work. It is our job to create it, to pour ourselves into it, and to master our craft as best we can."`,
    
    author: `James Clear`
},
{
    quote: `"You can increase your surface area for good luck by taking action.

    The forager who explores widely will find lots of useless terrain, but is also more likely to stumble across a bountiful berry patch than the person who stays home.
    
    Similarly, the person who works hard, pursues opportunity, and tries more things is more likely to stumble across a lucky break than the person who waits."`,
    
    author: `James Clear`
},
{
    quote: `"If I need things to be a certain way, I'm held hostage by them"`,
    
    author: `Jonny Wilkinson`
},
{
    quote: `"Saying no saves you time in the future. Saying yes costs you time in the future.

    No is like a time credit. You can spend that block of time in the future.
    
    Yes is like a time debt. You have to repay that commitment at some point.
    
    No is a decision. Yes is a responsibility."`,
    
    author: `James Clear`
},
{
    quote: `"Most of the excuses I made...

    - not enough time
    - not enough money
    - not enough knowledge
    - not the right connections
    
    ...were just ways to avoid the real bottleneck: Not enough courage.
    
    There was always a small step I could have taken—if I had the guts to take it."`,
    
    author: `James Clear`
},
{
    quote: `"You can either be judged because you created something or ignored because you left your greatness inside of you. Your call."`,
    
    author: `James Clear`
},
{
    quote: `"Convincing someone to change their mind is really the process of convincing someone to change their tribe. If they abandon their beliefs, they run the risk of losing social ties. You can’t expect someone to change their mind if you take away their community too. You have to give them somewhere to go.

    Nobody wants their worldview torn apart if loneliness is the outcome."`,
    
    author: `James Clear`
},
{
    quote: `"If you think you can learn a lot from reading books, try writing one."`,
    
    author: `James Clear`
},
{
    quote: `"The list of mistakes you can never recover from is very short.

    But you likely realize your life will not be destroyed if your book doesn’t sell or if a potential date turns you down or if your startup goes bust. It’s not the failed outcome that paralyzes us. It’s the possibility of looking stupid, feeling humiliated, or dealing with embarrassment that prevents us from getting started at all.
    
    The first step to being courageous is being willing to look foolish."`,
    
    author: `James Clear`
},
{
    quote: `"Never cut what you can untie."`,
    
    author: `Joseph Joubert`
},
{
    quote: `"There will never be a perfect time to do something that stretches you.

    That’s true whether you are starting a business, having a child, changing careers, or wrestling with any number of challenges. That’s not a license to be reckless and never think things through, but at some point you have to embrace the uncertainty because it is the only path forward.
    
    If you were ready for it, it wouldn't be growth."`,
    
    author: `James Clear`
},
{
    quote: `"Planning and preparation are useful until they become a form of procrastination.

    Is this task enhancing my actions or substituting for them?"`,
    
    author: `James Clear`
},
{
    quote: `"Too often, we fall into an all-or-nothing cycle with our habits.

    The problem is not slipping up; the problem is thinking that if you can’t do something perfectly, then you shouldn’t do it at all."`,
    
    author: `James Clear`
},
{
    quote: `"A writer — and, I believe, generally all persons — must think that whatever happens to him or her is a resource. All things have been given to us for a purpose, and an artist must feel this more intensely. All that happens to us, including our humiliations, our misfortunes, our embarrassments, all is given to us as raw material, as clay, so that we may shape our art."`,
    
    author: `Jorge Luis Borges`
},
{
    quote: `"Patience is a competitive advantage.

    In a surprising number of fields, you can find success if you are simply willing to do the reasonable thing longer than most people."`,
    
    author: `James Clear`
},
{
    quote: `"Most people don’t want accurate information, they want validating information.

    Growth requires you to be open to unlearning ideas that previously served you."`,
    
    author: `James Clear`
},
{
    quote: `"Your mind is a suggestion engine. Every thought you have is a suggestion, not an order.

    Sometimes your mind suggests that you are tired, that you should give up, or that you should take an easier path.
    
    But if you pause, you can discover new suggestions. For example, that you will feel good once the work is done or that you have the ability to finish things even when you don't feel like it.
    
    Your thoughts are not orders. Merely suggestions. You have the power to choose which option to follow."`,
    
    author: `James Clear`
},
{
    quote: `"Instead of feeling that you’ve blown the day and thinking, "I'll get back on track tomorrow," try thinking of each day as a set of four quarters: morning, midday, afternoon, evening. If you blow one quarter, you get back on track for the next quarter.

    Fail small, not big."`,
    
    author: `Gretchen Rubin`
},
{
    quote: `"Starting from zero can be a gift.

    If you don't have much to begin with, you don't have much to lose.
    
    You can be bold when you aren't trying to protect something."`,
    
    author: `James Clear`
},
{
    quote: `"In many cases, the outcome you want will continue to elude you—even if you try harder.

    But it may be possible if you try differently.
    
    Can your current choices carry you to your desired future? If not, something has to change. You can’t get there from here. You have to get on a different trajectory."`,
    
    author: `James Clear`
},
{
    quote: `"You don’t need a better computer to become a writer.

    You don’t need a better guitar to become a musician.
    
    You don’t need a better camera to become a photographer.
    
    What you need is to get to work."`,
    
    author: `James Clear`
},
{
    quote: `"Faced with the choice between changing one's mind and proving that there is no need to do so, almost everyone gets busy on the proof."`,
    
    author: `John Kenneth Galbraith`
},
{
    quote: `"Choosing the priority is as important as working on it."`,
    
    author: `James Clear`
},
{
    quote: `"A surprisingly effective way to get what you want is to not settle for less than what you want.

    It doesn't always work—you can't force the world to be a certain way—and you may need healthy doses of patience and doggedness, but your life bends toward what you accept."`,
    
    author: `James Clear`
},
{
    quote: `"We need to redefine "hard work" to include "hard thinking."

    The person who outsmarts you is out working you. The person who finds shortcuts is out working you. The person with a better strategy is out working you.
    
    Usually, the hardest work is thinking of a better way to do it."`,
    
    author: `James Clear`
},
{
    quote: `"If I had to live my life again, I’d make the same mistakes, only sooner."`,
    
    author: `Tallulah Bankhead`
},
{
    quote: `"You don't need to predict how everything will play out.

    Just master the next step and continue moving in the right direction."`,
    
    author: `James Clear`
},
{
    quote: `"Prediction depends on events outside your control.

    Creation depends on events within your control.
    
    Don’t guess about the future. Shape it."`,
    
    author: `James Clear`
},
{
    quote: `"Prediction depends on events outside your control.

    Creation depends on events within your control.
    
    Don’t guess about the future. Shape it."`,
    
    author: `James Clear`
},
{
    quote: `"When you counsel someone, you should appear to be reminding him of something he had forgotten, not of the light he was unable to see."`,
    
    author: `Baltasar Gracian`
},
{
    quote: `"It never occurred to me that I couldn’t live the life I wanted to lead. It never occurred to me that I could be stopped...

    I had this very simple view: that the reason people who start out with ideals or aspirations don’t do what they dream of doing when they’re young is because they quit.
    
    I thought, well, I won’t quit."`,
    
    author: `Susan Sontag`
},
{
    quote: `"Strangely, life gets harder when you try to make it easy.

    Exercising might be hard, but never moving makes life harder. Uncomfortable conversations are hard, but avoiding every conflict is harder. Mastering your craft is hard, but having no skills is harder.
    
    Easy has a cost."`,
    
    author: `James Clear`
},
{
    quote: `"Unfinished projects can’t compound."`,
    
    author: `James Clear`
},
{
    quote: `"When choosing a new habit many people seem to ask themselves, “What can I do on my best days?”
    ​
    The trick is to ask, “What can I stick to even on my worst days?”
    ​
    Start small. Master the art of showing up. Scale up when you have the time, energy, and interest."`,
    
    author: `James Clear`
},
{
    quote: `"When it's over, I want to say: all my life I was a bride married to amazement. I was the bridegroom, taking the world into my arms.

    When it's over, I don't want to wonder if I have made of my life something particular, and real. I don't want to find myself sighing and frightened, or full of argument.
    
    I don't want to end up simply having visited this world."`,
    
    author: `Mary Oliver`
},
{
    quote: `"Not being busy is a competitive advantage.

    Most people are so strapped for time they can't take advantage of lucky opportunities or quickly resolve unexpected problems.
    
    Maintain a bias toward action, but leave room for the unexpected."`,
    
    author: `James Clear`
},
{
    quote: `"Finishing projects is part of what it means to deliver high quality work. It's not high quality if your perfectionism prevents you from finishing."`,
    
    author: `James Clear`
},
{
    quote: `"I can't tell you how many times I don't feel like training and tell myself, "I'll just do one set and see how I feel."

    You would think it would stop working at some point, but I almost always end up doing the whole workout.
    
    Just start. Do a little and see what happens."`,
    
    author: `James Clear`
},
{
    quote: `"It is impossible to get better and look good at the same time.

    Give yourself permission to be a beginner. By being willing to be a bad artist, you have a chance to be an artist, and perhaps, over time, a very good one."`,
    
    author: `Julia Cameron`
},
{
    quote: `"Every opportunity is attached to a person. Opportunities do not float like clouds in the sky. They’re attached to people.

    If you’re looking for an opportunity — including one that has a financial payoff — you’re really looking for a person."`,
    
    author: `Ben Casnocha`
},
{
    quote: `"The Cardinal Rule of Behavior Change:

    What gets rewarded, gets repeated. What gets punished, gets avoided.
    
    Don't reward behavior you don't want to see repeated."`,
    
    author: `James Clear`
},
{
    quote: `"The bad days are more important than the good days.

    If you write or exercise or meditate or cook when you don't feel like it, then you maintain the habit.
    
    And if you maintain the habit, then all you need is time."`,
    
    author: `James Clear`
},
{
    quote: `"You can usually accomplish more by giving something your full effort for a few years rather than giving it a lukewarm effort for fifty years.

    Pick a priority for this season of your life and do it to the best of your ability."`,
    
    author: `James Clear`
},
{
    quote: `"I argue that the most powerful thing you can do to add healthy years is to curate your immediate social network. In general, you want friends with whom you can have a meaningful conversation. You can call them on a bad day and they will care. Your group of friends are better than any drug or anti-aging supplement, and will do more for you than just about anything."`,
    
    author: `Dan Buettner`
},
{
    quote: `"If you want a significant change in your results, then you probably need a significant change to your strategy. Working harder on your current strategy is unlikely to move the needle.

    Before you work harder, work on the right thing.
    
    Play better games. Win better prizes."`,
    
    author: `James Clear`
},
{
    quote: `"The things you take pride in are the same things you are likely to be biased about.

    How might the things you take pride in be misleading you?
    
    The tighter you cling to your current identity, the harder it becomes to grow beyond it."`,
    
    author: `James Clear`
},
{
    quote: `"Know what you want.

    Follow a trajectory where what you want is a possible outcome.
    
    Build a system to incrementally improve your ability to follow that trajectory.
    
    Trust yourself.
    
    Enjoy the outcomes.
    
    Repeat."`,
    
    author: `James Clear`
},
{
    quote: `"I'm not interested in whether the glass is half empty or half full. I'm interested in figuring out how to fill the glass."`,
    
    author: `Donald Kaberuka`
},
{
    quote: `"Never expect to fail, but always plan for it.

    The fastest way to get back on track is to have a plan for when you're off it."`,
    
    author: `James Clear`
},
{
    quote: `"In many cases, improvement is not about doing more things right, but about doing less things wrong.

    Don't look for things to add. Look for things to eliminate."`,
    
    author: `James Clear`
},
{
    quote: `"We cannot control our luck—good or bad—but we can control our effort and preparation.

    Luck smiles on us all from time to time. And when it does, the way to honor your good luck is to work hard and make the most of it."`,
    
    author: `James Clear`
},
{
    quote: `"Lessons are repeated until they are learned. A lesson will be presented to you in various forms until you have learned it. When you have learned it, you can go on to the next lesson.

    Learning lessons does not end. There's no part of life that doesn't contain its lessons. If you're alive, that means there are still lessons to be learned."`,
    
    author: `Cherie Carter-Scott`
},
{
    quote: `"Try to imagine a life without timekeeping. You probably can’t. You know the month, the year, the day of the week. There is a clock on your wall or the dashboard of your car. You have a schedule, a calendar, a time for dinner or a movie. Yet all around you, timekeeping is ignored. Birds are not late. A dog does not check its watch. Deer do not fret over passing birthdays. Man alone measures time. Man alone chimes the hour. And, because of this, man alone suffers a paralyzing fear that no other creature endures. A fear of time running out."`,
    
    author: `Mitch Albom`
},
{
    quote: `"Many people wish they started sooner. Almost nobody wishes they started later."`,
    
    author: `James Clear`
},
{
    quote: `"Failure is most useful when you give your best effort.

    If you fail with a lackluster effort, you haven't learned much. Perhaps you could have succeeded with a proper focus.
    
    But if your best effort fails, you have learned something valuable: this way doesn't work."`,
    
    author: `James Clear`
},
{
    quote: `"Nobody is rooting for you to fail.

    You may succeed. You may fail. But, for the most part, nobody cares one way or the other.
    
    This is good. The world is big and you are small, which means you can chase your dreams with little worry for what people think."`,
    
    author: `James Clear`
},
{
    quote: `"The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same."`,
    
    author: `Carlos Castaneda`
},
{
    quote: `"Your time is better spent championing good ideas than tearing down bad ones.

    The best thing that can happen to a bad idea is that it is forgotten. The best thing that can happen to a good idea is that it is shared.
    
    Feed the good ideas and let bad ideas die of starvation."`,
    
    author: `James Clear`
},
{
    quote: `"Everything is an oversimplification. Reality is messy and complex.

    The question is whether it is a useful simplification.
    
    Know the limitations of an idea and you can apply it to great effect—despite the messiness of reality."`,
    
    author: `James Clear`
},
{
    quote: `"We often make choices based on immediate outcomes. What can I do to experience a little joy in the next 30 minutes? What can I accomplish in the next hour?

    But if you always expect to get a little bit of reward for a little bit of effort, then you often overlook actions that lead to greater payoffs down the road. The relationship between input and output is rarely linear.
    
    The course of action that could provide greater happiness, meaning, or satisfaction in the long run may not make you happy in the next 30 minutes."`,
    
    author: `James Clear`
},
{
    quote: `"I don't like that word 'finish'. When something is finished, that means it's dead, doesn't it? I believe in everlastingness. I never finish a painting – I just stop working on it for a while.

    I like painting because it's something I never come to the end of. Sometimes I paint a picture, then I paint it all out. Sometimes I'm working on fifteen or twenty pictures at the same time. I do that because I want to – because I like to change my mind so often.
    
    The thing to do is always to keep starting to paint, never finishing painting."`,
    
    author: `Arshile Gorky`
},
{
    quote: `"Most lucky events in life are opportunities, not outcomes.

    The value of an opportunity changes depending on how it is treated. Without effort, good luck becomes a missed opportunity. With effort, good luck can become a life-changing event.
    
    You need luck and hard work. It's not either/or. It's both/and. The result will not walk through the door on its own."`,
    
    author: `James Clear`
},
{
    quote: `"When in doubt, just say thank you. There is no downside. Are you honestly worried about showing too much gratitude to the people in your life?"`,
    
    author: `James Clear`
},
{
    quote: `"How much could I lose?" is not merely a financial question.

    If I make this choice:
    
    - How much time could I lose?
    
    - How much sanity could I lose?
    
    - How much reputation could I lose?
    
    - How much happiness could I lose?
    
    Opportunity cost is about a lot more than money."`,
    
    author: `James Clear`
},
{
    quote: `"You should know that when a message you convey to another person is not understood by him, at least one of the following things is true: what you have said is not true, or you have conveyed it without kindness."`,
    
    author: `Leo Tolstoy`
},
{
    quote: `"Not every problem needs to be overcome, just the ones stopping you from getting where you want to be."`,
    
    author: `Ann Hill`
},
{
    quote: `"An expert is someone who, over many years, manages to remain confident enough to keep trying and humble enough to keep learning."`,
    
    author: `James Clear`
},
{
    quote: `"You have no responsibility to live up to someone else's expectation of you.

    Spend as little time as possible chasing other people's preferences instead of your own."`,
    
    author: `James Clear`
},
{
    quote: `"Slowing down enables you to act in a high quality way.

    Kind rather than curt. Polished rather than sloppy.
    
    It's hard to be thoughtful when you're in a rush."`,
    
    author: `James Clear`
},
{
    quote: `"I think of the trees and how simply they let go, let fall the riches of a season, how without grief (it seems) they can let go and go deep into their roots for renewal and sleep...

    Imitate the trees. Learn to lose in order to recover, and remember that nothing stays the same for long, not even pain, psychic pain. Sit it out. Let it all pass. Let it go."`,
    
    author: `May Sarton`
},
{
    quote: `"Are you willing to be uncomfortable for 5 minutes?

    Exercising is easier once you've started the workout.
    
    Conversation is easier once you're already talking.
    
    Writing is easier once you're in the middle of it.
    
    But many rewards in life will elude you if you're not willing to be a little uncomfortable at first."`,
    
    author: `James Clear`
},
{
    quote: `"The world contains far more information than any single person can learn in their lifetime.

    The question is not whether you are ignorant, but what you choose to be ignorant about.
    
    Few topics are worth your precious time. Choose what you pay attention to with great care."`,
    
    author: `James Clear`
},
{
    quote: `"Sometimes in life, you will make mistakes. And when you think back on those mistakes, you may feel embarrassed. That's a normal feeling. Nobody is perfect and we all make our fair share of mistakes in life.

    However, if you do not take responsibility for the mistake and do your best to correct it, then you are committing a second mistake. Do the right thing, even though you may feel embarrassed by your previous actions. Don't compound the error."`,
    
    author: `James Clear`
},
{
    quote: `"It is good for a professional to be reminded that his professionalism is only a husk, that the real person must remain an amateur, a lover of the work."`,
    
    author: `May Sarton`
},
{
    quote: `"Most geniuses—especially those who lead others—prosper not by deconstructing intricate complexities but by exploiting unrecognized simplicities."`,
    
    author: `Andy Benoit`
},
{
    quote: `"If you added up all the time wasted searching for shortcuts and trying to cheat the process, the hard work could have already been done by now."`,
    
    author: `James Clear`
},
{
    quote: `"Have no single point of failure.

    Have no single path to success."`,
    
    author: `James Clear`
},
{
    quote: `"In the middle, it feels slow.

    In hindsight, it feels fast."`,
    
    author: `James Clear`
},
{
    quote: `"Many of us seek community solely to escape the fear of being alone. Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape."`,
    
    author: `Bell Hooks`
},
{
    quote: `"Simple is nearly always better. But if it's going to be complicated, then make sure the problem is worth the complexity. A great deal of time is wasted creating complex solutions to relatively unimportant problems."`,
    
    author: `James Clear`
},
{
    quote: `"Many situations in life are similar to going on a hike: the view changes once you start walking.

    You don't need all the answers right now. New paths will reveal themselves if you have the courage to get started."`,
    
    author: `James Clear`
},
{
    quote: `"A simple reminder from Atomic Habits:

    "Time will multiply whatever you feed it. Good habits make time your ally. Bad habits make time your enemy."`,
    
    author: `James Clear`
},
{
    quote: `"You cannot define a person on just one thing. You can’t just forget all these wonderful and good things that a person has done because one thing didn’t come off the way you thought it should come off."`,
    
    author: `Aretha Franklin`
},
{
    quote: `"I can't tell you how much time is spent worrying about decisions that don't matter. To just be able to make a decision and see what happens is tremendously empowering, but that means you have to set up the situation such that when something does go wrong, you can fix it."`,
    
    author: `Ward Cunningham`
},
{
    quote: `"If you'd like to do something bold with your life, you will have to choose to do something bold on a specific day.

    There is no perfect day. There is no right time. For the trajectory to change, there has to be one day when you simply make the choice."`,
    
    author: `James Clear`
},
{
    quote: `"If someone has the courage to admit they were wrong, you should have the grace to give them credit for admitting it. Rubbing it in encourages them to never admit being wrong again."`,
    
    author: `James Clear`
},
{
    quote: `"The more precisely you define the problem, the more easily you can find a solution.

    "I feel bad" can have a million causes.
    
    "I didn't sleep much last night and I haven't exercised in a week" has a very straightforward answer."`,
    
    author: `James Clear`
},
{
    quote: `"Accept the truth from whatever source it comes."`,
    
    author: `Moses Maimonides`
},
{
    quote: `"Finish every day and be done with it. For manners and for wise living it is a vice to remember. You have done what you could; some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day; you shall begin it well and serenely, and with too high a spirit to be cumbered with your old nonsense. This day for all that is good and fair. It is too dear, with its hopes and invitations, to waste a moment on the rotten yesterdays."`,
    
    author: `Ralph Waldo Emerson`
},
{
    quote: `"Prime your environment to make the next action easy."`,
    
    author: `James Clear`
},
{
    quote: `"You can't double your intelligence in one hour, but you can use one hour to write something twice as clear. And ideas that are easy to read and easy to understand will make you seem smarter. The better you communicate, the more intelligent you appear."`,
    
    author: `James Clear`
},
{
    quote: `"Your entire life happens inside your body. It's the one home you will always occupy and can never sell.

    But you can renovate it.
    
    If you can only pick one habit to build, exercise might be the one. Everything is downstream from how your body is functioning."`,
    
    author: `James Clear`
},
{
    quote: `"Think of many things. Do one."`,
    
    author: `Portugues Proverb`
},
{
    quote: `"Define yourself by your effort, not your suffering."`,
    
    author: `James Clear`
},
{
    quote: `"Charity can be a lifestyle, not merely a gift.

    Read charitably. Give the author your most favorable interpretation.
    
    Listen charitably. Donate your undivided attention.
    
    Work charitably. Be generous with your expertise.
    
    In this way, you make charity a daily habit."`,
    
    author: `James Clear`
},
{
    quote: `"I read once that the true mark of a pro — at anything — is that he understands, loves, and is good at even the drudgery of his profession."`,
    
    author: `Paul Halmos`
},
{
    quote: `"The climb is the fun part."`,
    
    author: `James Clear`
},
{
    quote: `"Good marketing can sell once, but only a good product can sell twice.

    In the long run, your performance reverts to the value you provide."`,
    
    author: `James Clear`
},
{
    quote: `"Motivation comes and goes. If you want to do something consistently, then don't pick a level of difficulty that requires great motivation.

    Make it easy enough and simple enough that you'll do it even when you don't feel very motivated."`,
    
    author: `James Clear`
},
{
    quote: `"Criticizing is easy and fast. Creating is difficult and slow. The two hours you spent on a book or movie usually took two years to produce.

    Anyone can tear down someone else’s work. The true test of insight is whether you can help them improve it or build something of your own."`,
    
    author: `Adam Grant`
},
{
    quote: `"The goal of adulthood is to let go of the other possible existences and to make the best of the one. A successful adult is one who understands that it doesn't matter which life you ultimately pick, only that you live it well."`,
    
    author: `Chris Ballas`
},
{
    quote: `"You cannot remove struggle from life, but you can improve your ability to handle challenge."`,
    
    author: `James Clear`
},
{
    quote: `"Revising a book before it is published is incredibly useful. The extra polish improves the first impression.

    Publishing a second edition a few years after publishing, even if it involves the same revisions, is less useful. The brand has already been established.
    
    Refine at the right time."`,
    
    author: `James Clear`
},
{
    quote: `"Two truths that can be at odds:

    1) There are no bonus points in life for doing it the hard way.
    2) There is a lot to be gained in life by acting fast and giving your best effort.
    
    Don't let the excuse of searching for a better way prevent you from taking action."`,
    
    author: `James Clear`
},
{
    quote: `"Often people attempt to live their lives backwards: they try to have more things, or more money, in order to do more of what they want so that they will be happier.

    The way it actually works is the reverse. You must first be who you really are, then, do what you need to do, in order to have what you want."`,
    
    author: `Shakti Gawain`
},
{
    quote: `"Look around your environment.

    Rather than seeing items as objects, see them as magnets for your attention. Each object gently pulls a certain amount of your attention toward it.
    
    Whenever you discard something, the tug of that object is released. You get some attention back."`,
    
    author: `James Clear`
},
{
    quote: `"Powerful combination = Hate being bad at stuff + Willing to look like a beginner.

    People who hate being bad at stuff are driven to improve. However, if they are unwilling to look like a beginner from time to time, they will avoid new challenges and struggle to reinvent themselves.
    
    Meanwhile, people who are willing to try new things, but lack a thirst to improve will settle for mediocre results.
    
    It's the willingness to look foolish for a short time—but not for a long time—that leads to jumps in performance."`,
    
    author: `James Clear`
},
{
    quote: `"Walk slowly, but never backward."`,
    
    author: `James Clear`
},
{
    quote: `"I started dividing my to-do list into 1) things I have to do, 2) things I want to do, and 3) things other people want me to do. Life changing! I often don’t get to #3 and I finally realized... this is what it means to have boundaries."`,
    
    author: `Jenée Desmond-Harris`
},
{
    quote: `"Everyone writes in a way; that is, each person has a "story," a personal narrative which is constantly being replayed, revised, taken apart, and put together again. The significant points in this narrative change as a person ages—what may have been tragedy at twenty is seen as comedy or nostalgia at forty. All children write. (And paint, and sing.) I suppose the real question is why do so many people give it up?"`,
    
    author: `Margaret Atwood`
},
{
    quote: `"For those who expect everything, there are many curses.

    For those who appreciate everything, there are many blessings."`,
    
    author: `James Clear`
},
{
    quote: `"Money is not the only way to improve life. Instead of widening your margin of profit, widen your margin of leisure. Instead of optimizing for money, optimize for time. Instead of seeking efficiency, seek recovery."`,
    
    author: `James Clear`
},
{
    quote: `"Nobody's going to do your life for you. You have to do it yourself, whether you're rich or poor, out of money or raking it in, the beneficiary of ridiculous fortune or terrible injustice. And you have to do it no matter what is true. No matter what is hard. No matter what unjust, sad, sucky things befall you. Self-pity is a dead-end road. You make the choice to drive down it. It's up to you to decide to stay parked there or to turn around and drive out."`,
    
    author: `Cheryl Strayed`
},
{
    quote: `"I strongly believe that the only way to encourage innovation is to give it to the young. The young have a great advantage in that they are ignorant. Because I think ignorance in science is very important. If you’re like me and you know too much you can’t try new things. I always work in fields of which I’m totally ignorant."`,
    
    author: `Sydney Brenner`
},
{
    quote: `"Just because it didn’t work doesn’t mean it was the wrong choice.

    The world is full of probabilities, not certainties.
    
    Find a game where the probabilities favor you and keep taking shots."`,
    
    author: `James Clear`
},
{
    quote: `"If you know where you want to go in life, people tend to help or get out of the way.

    Both of those are useful."`,
    
    author: `James Clear`
},
{
    quote: `"People follow incentives, not advice."`,
    
    author: `James Clear`
},
{
    quote: `"The best arguments in the world won't change a single person's mind. The only thing that can do that is a good story."`,
    
    author: `Richard Powers`
},
{
    quote: `"The most important battles must be fought anew each day.

    Exercising today does not render tomorrow's workout unnecessary.
    
    Supporting your spouse today does not mean you can mail it in tomorrow.
    
    Learn to love the endless nature of things and life gets easier."`,
    
    author: `James Clear`
},
{
    quote: `"As far as life philosophies go, "The right time is right now" isn't a bad one. Most of us would benefit from a greater bias toward action.

    If you move fast, you can try more things. And if you try more things, you're likely to find something that works for you."`,
    
    author: `James Clear`
},
{
    quote: `"Remove the branches of a thorn bush today and you'll avoid a scrape this year. But next year, you'll face the same problem again.

    Remove the root of the bush today, and the entire plant will die.
    
    Are you solving problems at the branch level or the root level?"`,
    
    author: `James Clear`
},
{
    quote: `"Every problem, every dilemma, every dead end we find ourselves facing in life, only appears unsolvable inside a particular frame or point of view. Enlarge the box, or create another frame around the data, and problems vanish, while new opportunities appear."`,
    
    author: `Benjamin and Rosamund Zander`
},
{
    quote: `"If an idea is true, criticism will not destroy it, but strengthen it."`,
    
    author: `James Clear`
},
{
    quote: `"You need focus to become exceptional at anything.

    Massive amounts of time and energy are wasted optimizing things that should be left undone.
    
    You have to be great at saying no."`,
    
    author: `James Clear`
},
{
    quote: `"A gift you can give yourself right now:

    Stop what you're doing. Close your eyes.
    
    For the next 60 seconds, just breathe."`,
    
    author: `James Clear`
},
{
    quote: `"Quality of life is having the freedom to make choices that are not fear based. Whether it’s the ability to choose the kinds of projects I want to take on and can learn from, or the ability to take a month off to travel. Freedom to choose is the ultimate luxury."`,
    
    author: `Danielle Colding`
},
{
    quote: `"It's only work if you would rather be doing something else.

    Find a way to carve a career out of what you already want to do."`,
    
    author: `James Clear`
},
{
    quote: `"Build small habits. Make big plans.

    1) Keep your daily actions small. Strive to get 1% better every day.
    
    2) Keep your daily mindset big. Think about how you can play a bigger game.
    
    Start small, but never dream small."`,
    
    author: `James Clear`
},
{
    quote: `"Great work resists compression.

    Great explanations are short, but potent.
    
    Great software delivers the same outcome in fewer clicks.
    
    Great manufacturing processes create products in less time and with less waste.
    
    The shape of genius is simplicity."`,
    
    author: `James Clear`
},
{
    quote: `"A change in perspective is worth 80 IQ points."`,
    
    author: `Alan Kay`
},
{
    quote: `"If I could talk to myself twenty years ago, I would tell myself to focus on my strengths, and not on my weaknesses; on the things I could do and not the things I couldn’t do; to strive to excel and hone those skills to the point of excellence. That this was the best strategy to secure my future. I would say to myself that the only real obstacles you have are those you create for yourself."`,
    
    author: `Mariam Paré`
},
{
    quote: `"Usually, the better someone does their job, the easier it looks. You rarely realize how hard it is until you try it yourself."`,
    
    author: `James Clear`
},
{
    quote: `"Two of the key questions in life: How do I grow? How do I manage risk?

    You need to do both if you wish to survive and excel."`,
    
    author: `James Clear`
},
{
    quote: `"Speed is important. Work fast and iterate. People rarely remember the first draft, but everyone remembers the final draft.

    Speed is unimportant. People rarely remember how long it took you to do the job, but everyone remembers how well you did the job."`,
    
    author: `James Clear`
},
{
    quote: `"If you add only a little to a little and do this often, soon that little will become great."`,
    
    author: `Hesiod`
},
{
    quote: `"Knowledge is making the right choice with all the information.

    Wisdom is making the right choice without all the information."`,
    
    author: `James Clear`
},
{
    quote: `"Treat every opportunity like a great opportunity, and you may find a few of them to be just that."`,
    
    author: `James Clear`
},
{
    quote: `"Most of the embarrassing moments of my life happened when I wanted to say no, but ended up saying yes (or saying nothing at all).

    Most of the missed opportunities in my life happened when I wanted to say yes, but ended up saying no (or saying nothing at all)."`,
    
    author: `James Clear`
},
{
    quote: `"The time to worry is three months before a flight. Decide then whether or not the goal is worth the risks involved. If it is, stop worrying. To worry is to add another hazard."`,
    
    author: `Amelia Earhart`
},
{
    quote: `"It is not necessary to change a person in order to change their behavior.

    Just change their environment."`,
    
    author: `James Clear`
},
{
    quote: `"Many problems are minor when you solve them right away, but grow into an enormous conflict when you let them linger.

    As a rule of thumb, fix it now."`,
    
    author: `James Clear`
},
{
    quote: `"Raise your ambitions. Lower your expectations.

    The higher your ambitions, the bolder your actions.
    
    The lower your expectations, the greater your satisfaction.
    
    Achieve more and be happy along the way."`,
    
    author: `James Clear`
},
{
    quote: `"Anyone who acts without paying attention to what he is doing is wasting his life. I'd go so far as to say life is denied by lack of attention, whether it be to cleaning windows or trying to write a masterpiece."`,
    
    author: `Nadia Boulanger`
},
{
    quote: `"What are my top risks? How can I mitigate them?

    What are my unique strengths? How can I leverage them?
    
    The objective is to survive long enough to see the rewards of your advantage accumulate."`,
    
    author: `James Clear`
},
{
    quote: `"Sure, at some level, every experience in life boils down to your interpretation of it. And if you can shift your mindset, then perhaps you can turn a negative experience into a positive one.

    But life is not a hallucination. You still have to deal with things. A healthy perspective can lessen the burden, but so can taking action. A problem that is solved is one that you don't need to mentally reframe."`,
    
    author: `James Clear`
},
{
    quote: `"Sometimes the most productive thing you can do is eliminate the task.

    Downsize. The rooms you don't have, don't need to be cleaned.
    
    Donate. The items you don't own, don't need to be organized.
    
    Delete. The projects you don't take on, don't need to be finished.
    
    Is this a problem that needs to be solved? Or is it a problem that can be eliminated all together?"`,
    
    author: `James Clear`
},
{
    quote: `"I do not like the idea of happiness — it is too momentary. I would say that I was always busy and interested in something — interest has more meaning to me than the idea of happiness."`,
    
    author: `Georgia O'Keefe`
},
{
    quote: `"In life there isn’t a single person that knows everything and there is no person that knows nothing. It’s not too late to learn because you just need to develop that interest, talk to people, share with them what you have and learn from them. There is no breakthrough in this world if you are isolated, you can only make a breakthrough by talking to people"`,
    
    author: `Marie-Christine Gasingirwa`
},
{
    quote: `"It seems, in fact, as though the second half of a person's life is made up of nothing but the habits they accumulated during the first half.`,
    
    author: `Fyodor Dostoyevsky`
},
{
    quote: `"Lucky opportunities tend to be stumbled upon, not handed out.

    If you're waiting for someone to hand deliver an excellent opportunity to you, it's unlikely to happen. But if you are exploring and moving—if you're in the mix and engaged—then you'll stumble upon many opportunities.
    
    The active mind comes across a lot. Keep tilling the soil and you will occasionally unearth something wonderful."`,
    
    author: `James Clear`
},
{
    quote: `"Many times in life the question is not whether to do thing or another, but when to emphasize one aspect or another.

    Rest or train? Research or write? Diversify or concentrate?
    
    Opposite answers can both be right. The question is which one is the right answer for right now."`,
    
    author: `James Clear`
},
{
    quote: `"Today is a great opportunity, no matter your age. Looking back in a few years, today will seem like the time when you were young and full of potential or the moment when you could have started early or the turning point when you made a choice that benefited your future.

    The moment in front of you right now is a good one. Make the most of it."`,
    
    author: `James Clear`
},
{
    quote: `"It's hubris to think that the way we see things is everything there is."`,
    
    author: `Lisa Randall`
},
{
    quote: `"Don't be fooled by the calendar. There are only as many days in the year as you make use of. One person gets only a week's value out of a year while another gets a full year's value out of a week."`,
    
    author: `Charles Richards`
},
{
    quote: `"Keep ignoring feedback and life will keep teaching you the same lesson."`,
    
    author: `James Clear`
},
{
    quote: `"In sports, one of the primary sources of advantage is choosing how to play the game.

    In life, one of the primary sources of advantage is choosing which game to play."`,
    
    author: `James Clear`
},
{
    quote: `"The brilliance of the stars would be invisible without the vast darkness of space behind them.

    Do not wish away the difficult portions of life. They provide the contrast needed to appreciate the joyful moments."`,
    
    author: `James Clear`
},
{
    quote: `"How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing. A schedule defends from chaos and whim. It is a net for catching days."`,
    
    author: `Annie Dillard`
},
{
    quote: `"A lot of smart people think they’re way smarter than they are, and therefore they do worse than dumb people. And it’s very common to be utterly brilliant and think you’re way the hell smarter than you are."`,
    
    author: `Charlie Munger`
},
{
    quote: `"Simple mindset shifts:

    - I'm not hurt, I'm healing.
    
    - I'm not losing, I'm learning.
    
    - I was not rejected, I was redirected.
    
    Negative things happen. Negative mindsets make them harder."`,
    
    author: `James Clear`
},
{
    quote: `"Over long time frames, simply staying in the game is impressive.

    - Health and fitness: Can you stay injury free and not miss workouts?
    
    - Wealth and finance: Can you avoid debt and continue to save?
    
    - Business: Can you maintain cash flow and stay in business?
    
    Longevity is its own form of greatness."`,
    
    author: `James Clear`
},
{
    quote: `"Let's start with a test: Do you have any opinions that you would be reluctant to express in front of a group of your peers?

    If the answer is no, you might want to stop and think about that. If everything you believe is something you're supposed to believe, could that possibly be a coincidence?
    
    Odds are it isn't. Odds are you just think whatever you're told."`,
    
    author: `Paul Graham`
},
{
    quote: `"There can be no happiness if the things we believe in are different from the things we do."`,
    
    author: `Freya Stark`
},
{
    quote: `"Two competing truths:

    - The more prepared person usually wins.
    
    - You get credit for action, not preparation."`,
    
    author: `James Clear`
},
{
    quote: `"What appears to be a rapid shift is often preceded by a gradual process. Our results gradually explode or vanish thanks to the small habits we repeat each day.

    What radical change are you slowly marching toward? An incremental explosion or an incremental vanishing?"`,
    
    author: `James Clear`
},
{
    quote: `"One type of person approaches a situation with the mindset of, “How can I make this work?”

    Another type seems to approach each circumstance with the mindset of, “What are all the reasons this wouldn’t work?”
    
    Both people will be forced to deal with reality, but the first person will only have to solve problems that actually occur while the second person will often avoid taking action entirely because of the potential problems they have dreamt up before starting.
    
    There will always be reasons to not do something. Be a problem solver, not a problem adder."`,
    
    author: `James Clear`
},
{
    quote: `"I don't want to get to the end of my life and find that I just lived the length of it. I want to live the width of it as well."`,
    
    author: `Diane Ackerman`
},
{
    quote: `"Stop learning, die young.

    Keep learning, stay young."`,
    
    author: `James Clear`
},
{
    quote: `"One of the great gift of sports is learning how to fail in public.

    People never go to the gym because they're scared of looking stupid, never share their writing because they're scared of judgment, never open their heart because they're scared of rejection.
    
    Sports train you to face your fear."`,
    
    author: `James Clear`
},
{
    quote: `"The mind is alive when it is flexible and adaptable. It can be updated, take new form, endure change.

    The mind is dead when it is fixed and immovable. It cannot absorb new ideas or thoughts. It is stiff and brittle.
    
    When we lose our ability to adapt, to move with the environment, to tolerate new beliefs and reshape our old ones, our mind is at risk of becoming outdated. The fixed mind becomes a relic."`,
    
    author: `James Clear`
},
{
    quote: `"Someone with half your IQ is making 10x as you because they aren't smart enough to doubt themselves."`,
    
    author: `Ed Latimore`
},
{
    quote: `"Any knowledge that doesn't lead to new questions quickly dies out: it fails to maintain the temperature required for sustaining life."`,
    
    author: `Wisława Szymborska`
},
{
    quote: `"The observant person finds many teachers."`,
    
    author: `James Clear`
},
{
    quote: `"Criticize to uplift, not to destroy."`,
    
    author: `James Clear`
},
{
    quote: `"Every transaction is paid for at least three times. First, with the money you pay. Second, with the time you spend. Third, with the reputation you create through your behavior.

    Being pleasant, reliable, and easy to work with might cost you a little more time. Perhaps even a bit of extra money. But the long-term returns from a great reputation usually outweigh the cost of a single transaction.
    
    Most of the value in life and in business arises out of good relationships."`,
    
    author: `James Clear`
},
{
    quote: `"We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about."`,
    
    author: `Charles Kingsley`
},
{
    quote: `"Busy is a decision. We do the things we want to do, period. If we say we are too busy, it is just shorthand for the thing being "not important enough" or "not a priority." Busy is not a badge. You don’t find the time to make things, you make the time to do things."`,
    
    author: `Debbie Millman`
},
{
    quote: `"The ultimate form of preparation is not planning for a specific scenario, but a mindset that can handle uncertainty."`,
    
    author: `James Clear`
},
{
    quote: `"In some areas of life, value is unlocked by starting. Even a five-minute workout or a short walk can reset your mood and benefit your body.

    In other areas, value is unlocked by finishing. It does you no good to build a bridge halfway across the river. You need to complete the project to realize the value.
    
    Do you need to start or finish? Are you building a body or building a bridge?"`,
    
    author: `James Clear`
},
{
    quote: `"Your net productivity is the balance of the productive and unproductive forces in your life.

    A great deal of time and energy is spent thinking about how to increase effort, but there is a lot to be gained by reducing friction.
    
    A car will travel faster not only if you press the accelerator, but also if you remove the speed bumps."`,
    
    author: `James Clear`
},
{
    quote: `"It's not the load that breaks you down, it's the way you carry it."`,
    
    author: `Lena Horne`
},
{
    quote: `"Understanding a person's hunger and responding to it is one of the most potent tools you'll ever discover for getting through to anyone you meet in business or your personal life."`,
    
    author: `Mark Goulston`
},
{
    quote: `"One good day does not mean you can coast tomorrow. You never have it fully licked. Making good choices is an endless process. Many areas of life that we value most—our relationships, our fitness, our craft—require a continual commitment."`,
    
    author: `James Clear`
},
{
    quote: `"One of the simplest ways to win is to always connect the small things you do to the larger thing you hope to accomplish.

    Five minutes can be spent working on something trivial or working on something life-changing. A brief session of work oriented toward a great cause is always time well spent.
    
    Most daily actions evaporate. Some accumulate."`,
    
    author: `James Clear`
},
{
    quote: `"One of the common trappings of success is overproducing.

    Companies make money and rapidly expand their product line. Authors become popular and churn out books at a faster clip.
    
    Scale can empower, but it can also dilute. Something is lost when quantity is valued over quality.
    
    You have to maintain your standards even when all the forces around you seem to be calling for growth. Push back against more, more, more and remain committed to better, better, better."`,
    
    author: `James Clear`
},
{
    quote: `"Power is influence over external events.

    Peace is influence over internal events."`,
    
    author: `James Clear`
},
{
    quote: `"Persistence and variety. These are the two primary ways to develop great ideas or to solve important problems.

    Keep leaning your head against a topic for a long time. Certainly for weeks, possibly for years. And along the way, try many lines of attack. Continue to generate options, explore paths, and propose silly ideas. Copy and paste concepts from widely different disciplines and see if it gets you anywhere. All the while, continue to refine the best solution you’ve found thus far.
    
    What looks like genius may simply be the byproduct of persistence and variety."`,
    
    author: `James Clear`
},
{
    quote: `"When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running."`,
    
    author: `James Clear`
},
{
    quote: `"If you want a golden rule that will fit everything, this is it: Have nothing in your houses that you do not know to be useful or believe to be beautiful."`,
    
    author: `William Morris`
},
{
    quote: `"Some things are a job, others are a craft. The primary difference is not the task, but the enthusiasm and curiosity put into the task. The more engaged and interested you are, the more it becomes a craft."`,
    
    author: `James Clear`
},
{
    quote: `"It only takes five minutes to break the cycle.

    Five minutes of exercise and you are back on the path. Five minutes of writing and the manuscript is moving forward again. Five minutes of conversation and the relationship is restored.
    
    It doesn't take much to feel good again."`,
    
    author: `James Clear`
},
{
    quote: `"Nobody accomplishes anything significant alone.

    But nobody accomplishes anything significant by accident either. Just because you need others doesn't mean you can wait for others to make it happen.
    
    You have to act as if you are a force of nature and try to bend the universe in your desired direction—while remaining pleasant and open to help along the way."`,
    
    author: `James Clear`
},
{
    quote: `"What makes a river so restful to people is that it doesn’t have any doubt—it is sure to get where it is going, and it doesn’t want to go anywhere else."`,
    
    author: `Hal Boyle`
},
{
    quote: `"Every thought a person dwells upon, whether he expresses it or not, either damages or improves his life."`,
    
    author: `Lucy Mallory`
},
{
    quote: `"Your calendar is a better measure of success than your bank account."`,
    
    author: `James Clear`
},
{
    quote: `"If you want to create something but feel it has already been done 1000 times, remember: There is always room for quality."`,
    
    author: `James Clear`
},
{
    quote: `"Deconstruct the cool things you see.

    If you'd like to become a better musician and you see an amazing performance, start paying attention to how they do it. How did they promote the event? What happens in the first ten seconds of each song? How frequently are they engaging directly with the audience? Is there a progression of energy throughout the show?
    
    When something fascinates you, pay attention to the details. The person who thinks, "That was cool" is a consumer. The person who thinks, "How did they make something that cool?" is on the path to being a creator.
    
    Don't just taste the recipe, look for the ingredients."`,
    
    author: `James Clear`
},
{
    quote: `"In the depths of winter, I finally learned that within me there lay an invincible summer."`,
    
    author: `Albert Camus`
},
{
    quote: `"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete."`,
    
    author: `Buckminster Fuller`
},
]

