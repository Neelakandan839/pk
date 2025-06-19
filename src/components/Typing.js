import React from "react";
import { Typewriter } from "react-simple-typewriter";

const message = `
Punitha...

I don’t know how to explain my feelings fully, but inside I’m breaking.

I’ve been carrying so much pain silently. And yesterday, I reached a point where I couldn’t even speak. Tears just came.

I’m loving you with my full heart. But when I get hurt again and again for the same reasons, it’s becoming too much.

You always say sorry, love me again… but after that, it keeps repeating. That’s what is hurting me the most.

Yes, I know even small changes in me hurt you — I’ve seen you cry. But still, when I share my pain, you always compare and say your feelings are more than mine.

All I want is… when I talk about my feelings, please don’t compare.

Don’t try to prove yours are bigger.

Just feel mine, like I feel yours.

Every time I cry or go silent, it’s not for attention. It’s because my heart can’t hold it anymore.

I’m tired now, Punitha. Mentally. Emotionally.

I’m not angry with you. I’m just… tired of breaking inside to make you understand me.

I believe you love me. I know you’re trying. But sorry to say this, 

If this same thing repeats again, I don’t think my heart can take it.

I’m saying this with love, not with hate.

Because I still want this love.

But only if we stop hurting each other.

So if there’s even a small chance that you can truly understand my pain, and change this pattern — please, remember this message.

Not just today.

Remember it the next time you feel like ignoring my feelings.

Don’t let my love go wasted. Don’t let my soul keep breaking like this.

I love you, Punitha. But I can't keep losing myself in love.

I need you to love me in a way that heals, not hurts.

I hope you understand... And if anything I said hurts you, I’m sorry, Punitha.
`;

export default function Typing() {
  return (
    <Typewriter
      words={[message]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={40}
    />
  );
}
