<div class="container">
	<div class="page_title">
		<h1>Artigo 2</h1>
	</div>
	<div class="article_title">
		<h2>They plugged GPT-4 into Minecraft - and unearthed new potential for AI</h2>
	</div>
	<div class="article_content">
		<div>
			<img
				class="article_image"
				src="https://cdn.arstechnica.net/wp-content/uploads/2023/06/minecraft-1-800x450.jpg"
				alt="Screenshot of Minecraft game"
			/>
		</div>
		<p>
			The technology that underpins ChatGPT has the potential to do much more than just talk. Linxi
			“Jim” Fan, an AI researcher at the chipmaker Nvidia, worked with some colleagues to devise a
			way to set the powerful language model GPT-4—the “brains” behind ChatGPT and a growing number
			of other apps and services—loose inside the blocky video game Minecraft.
		</p>
		<p>
			The Nvidia team, which included Anima Anandkumar, the company’s director of machine learning
			and a professor at Caltech, created a Minecraft bot called Voyager that uses GPT-4 to solve
			problems inside the game.The language model generates objectives that help the agent explore
			the game, and code that improves the bot’s skill at the game over time.
		</p>
		<p>
			Voyager doesn’t play the game like a person, but it can read the state of the game directly,
			via an API. It might see a fishing rod in its inventory and a river nearby, for instance, and
			use GPT-4 to suggest the goal of doing some fishing to gain experience. It will then use this
			goal to have GPT-4 generate the code needed to have the character achieve it.
		</p>
		<div>
			<embed
				class="article_embed"
				src="https://cdn.arstechnica.net/wp-content/uploads/2023/06/minecraft-2.mp4?_=1"
			/>
		</div>
		<p>
			The most novel part of the project is the code that GPT-4 generates to add behaviors to
			Voyager. If the code initially suggested doesn’t run perfectly, Voyager will try to refine it
			using error messages, feedback from the game, and a description of the code generated by
			GPT-4.
		</p>
		<p>
			Over time, Voyager builds a library of code in order to learn to make increasingly complex
			things and explore more of the game. A chart created by the researchers shows how capable it
			is compared to other Minecraft agents. Voyager obtains more than three times as many items,
			explores more than twice as far, and builds tools 15 times more quickly than other AI agents.
			Fan says the approach may be improved in the future with the addition of a way for the system
			to incorporate visual information from the game.
		</p>
		<p>
			While chatbots like ChatGPT have wowed the world with their eloquence and apparent
			knowledge—even if they often make things up—Voyager shows the huge potential for language
			models to perform helpful actions on computers. Using language models in this way could
			perhaps automate many routine office tasks, potentially one of the technology’s biggest
			economic impacts.
		</p>
		<div>
			<embed
				class="article_embed"
				src="https://cdn.arstechnica.net/wp-content/uploads/2023/06/minecraft-3.mp4?_=2"
			/>
		</div>
		<p>
			The process that Voyager uses with GPT-4 to figure out how to do things in Minecraft might be
			adapted for a software assistant that works out how to automate tasks via the operating system
			on a PC or phone. OpenAI, the startup that created ChatGPT, has added “plugins” to the bot
			that allow it to interact with online services such as grocery delivery app Instacart.
			Microsoft, which owns Minecraft, is also training AI programs to play it, and the company
			recently announced Windows 11 Copilot, an operating system feature that will use machine
			learning and APIs to automate certain tasks. It may be a good idea to experiment with this
			kind of technology inside a game like Minecraft, where flawed code can do relatively little
			harm.
		</p>
		<p>
			Video games have long been a test bed for AI algorithms, of course. AlphaGo, the machine
			learning program that mastered the extremely subtle board game Go back in 2016, cut its teeth
			by playing simple Atari video games. AlphaGo used a technique called reinforcement learning,
			which trains an algorithm to play a game by giving it positive and negative feedback, for
			example from the score inside a game.
		</p>
		<p>
			It is more difficult for this method to guide an agent in an open-ended game such as
			Minecraft, where there is no score or set of objectives and where a player’s actions may not
			pay off until much later. Whether or not you believe we should be preparing to contain the
			existential threat from AI right now, Minecraft seems like an excellent playground for the
			technology.
		</p>
		<div>
			<p class="article_reference">
				This story originally appeared on
				<a href="https://www.wired.com/story/fast-forward-gpt-4-minecraft-chatgpt/" target="_blank">
					wired.com
				</a>.
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		width: 100%;
		max-width: 1280px;
	}
	.page_title {
		font-size: 1.4rem;
		padding-left: 50px;
	}

	.article_title {
		display: flex;
		/* justify-content: center; */
		margin: 0px 20px;
		align-items: center;
		color: rgb(0, 0, 0);
		font-size: larger;
	}
	.article_content {
		margin: 0px 20px 40px 20px;
		text-align: justify;
	}
	.article_image {
		width: 100%;
		height: auto;
	}
	.article_embed {
		width: 100%;
		height: auto;
	}
	.article_content > p {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.article_reference > a {
		/* background-color: bisque; */
		transition: all 1s;
	}
	.article_reference > a:hover {
		color: rgb(62, 196, 201);
		font-size: large;
		transition: all 1s;
	}
</style>
