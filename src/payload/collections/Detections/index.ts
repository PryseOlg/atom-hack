import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Detections: CollectionConfig = {
    slug: 'Detections',
    admin: {
      useAsTitle: 'title',
      defaultColumns: ['title', 'slug', 'updatedAt'],
      preview: doc => {
        return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
          `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
        )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
      },
    },
    hooks: {
    //   beforeChange: [populatePublishedAt],
    //   afterChange: [revalidatePage],
    //   afterRead: [populateArchiveBlock],
    },
    versions: {
      drafts: true,
    },
    access: {
      read: adminsOrPublished,
      update: admins,
      create: admins,
      delete: admins,
    },
    fields: [
      {
        name: 'publishedAt',
        type: 'date',
        admin: {
          position: 'sidebar',
        },
      },
      {
        name: 'image_clear',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'image_detections',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'type',
        type: 'text',
      },
      {
        name: 'x1',
        type: 'text',
      },
      {
        name: 'x2',
        type: 'text',
      },
      {
        name: 'y1',
        type: 'text',
      },
      {
        name: 'y2',
        type: 'text',
      },
      {
        name: 'users',
        type: 'relationship',
        relationTo: 'users',
      },
      {
        name: 'Experience',
        type: 'number',
        access: {
          create: admins,
          update: admins,
        },
      },

      slugField(),
    ],
  }
