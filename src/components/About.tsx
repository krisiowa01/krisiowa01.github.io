import AboutPhotoSlider from "./AboutPhotoSlider";

export default function About() {
  return (
    <div className="about-section" id="about">
      <h2>KageWolf</h2>

      <p>
        <div id="introduction">
          Hello! Thanks so much for visiting my photography portfolio. I’ve been
          taking photos for six years now, and somewhere along the way, the
          camera became a quiet companion, something that helped me slow down,
          pay attention, and carry pieces of each place I’ve lived.
          <br /><br />
          My journey with photography began in Cedar Rapids, IA. I spent hours
          wandering past store windows, crossing bridges at night, and exploring
          quiet trails on my own. Those walks taught me how to see light, color,
          and small details I used to overlook. The camera gave me a reason to
          pause and breathe.
          <br /><br />
          When the opportunity to move to the Pacific Northwest came along, I
          felt that familiar mix of nerves and excitement. I prayed, trusted the
          moment, and went. Not long after, the world shut down due to COVID‑19.
          Life in the PNW looked nothing like I imagined, but remote work opened
          a door I didn’t expect — suddenly, I could live anywhere in the
          States.
          <br /><br />
          The only person I knew outside of Iowa at the time, that I was friends
          with, lived in North Las Vegas, NV. I reached out, wanting to be
          thoughtful of her space, and asked how she felt about me moving to the
          city. She was excited. I prayed again, and then I moved.
        </div>

        <br /><br />

        <div id="current">
          Las Vegas, NV.
          <br />
          I’ve been in the Las Vegas area for five years now, and I’ve grown to
          love the duality of this place. I’ve explored the red rocks of Red
          Rock Canyon, the surreal landscapes of Valley of Fire, and so many
          corners of the Southwest that feel like stepping onto another planet.
          I’ve also found a community of photographers and artists who continue
          to inspire me and push my creativity forward.
          <br /><br />
          I live in Henderson, NV now, and I’m here for good. I love being
          outdoors and I’m always up for an adventure, as long as I don't have
          to wake up at 5am LOL. Photography fits me well. It lets me connect
          without feeling overwhelmed, letting me stay behind the lens while
          still being part of the moment. The journey that led me to this place
          in my life, it feels meant to be.
          <br /><br />
          <div id="philosophy">"Let it all work out" - Lil Wayne</div>
          <br />
        </div>

        <div id="programming">
          Why am I really here? Photography is a cool hobby that I enjoy, but it
          has nothing on programming!!
          <br /><br />
          In 2014, I went back to school for Software Engineering, a single mom
          working full‑time in a group home, juggling exhaustion,
          responsibility, and a future I refused to let slip away. A few years
          earlier, life had unraveled in every direction: a divorce, a job loss,
          a mortgage, and people who depended on me. I stood at a crossroads
          with two paths in front of me, programming or nursing, and chose the
          one that felt like following my heart.
          <br /><br />
          Eight years later, I’m still grateful I did. Every day I get to learn,
          experiment, troubleshoot, and unravel the logic of this binary beast.
          It’s the kind of career that keeps unfolding, always giving me
          something new to discover.
          <br /><br />
          This website is a small dream realized, built during late nights and
          quiet weekends, piece by piece. I’m currently sharpening my frontend
          skills with React.js and Material UI, so if you have ideas for
          features or improvements, feel free to email me. If you ever want to
          talk photography or have questions, you can reach me at
          kage@kagewolffoto.com.
        </div>
      </p>

      <div className="about-photos">
        <figure>
          <AboutPhotoSlider
            images={[
              "/images/about/DSC02914.webp",
              "/images/about/DSC03377.webp",
              "/images/about/IMG_6072_jpg.webp"
            ]}
          />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

             </div>
    </div>
  );
}
