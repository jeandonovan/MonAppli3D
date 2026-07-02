import { z } from 'zod';

export const ModelUploadSchema = z.object({
  size: z.number().max(20_000_000), // 20MB max for MVP
  type: z.string(),
});
