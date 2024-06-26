import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			draft: z.boolean().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string())
		})
})

const project = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			heroImage: image().optional(),
			address: z.string().optional()
		})
})

const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		startDate: z.coerce.date(),
		endDate: z.optional(z.coerce.date()),
		company: z.string(),
		technologies: z.array(z.string()),
		position: z.string()
	})
})

const berufserfahrung = defineCollection({
	type: 'content',
	schema: z.object({
		startDate: z.coerce.date(),
		endDate: z.optional(z.coerce.date()),
		company: z.string(),
		position: z.string()
	})
})

const skill = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		germanName: z.string().optional(),
		level: z.number(),
		category: z.string()
	})
})

export const collections = { blog, project, work, skill, berufserfahrung }
