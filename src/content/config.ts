import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string())
	})
})

const project = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		image: z.string()
	})
})

const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		startDate: z.coerce.date(),
		endDate: z.optional(z.coerce.date()),
		company: z.string(),
		technologies: z.array(z.string())
	})
})

const skill = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		level: z.number(),
		category: z.string()
	})
})

export const collections = { blog, project, work, skill }
