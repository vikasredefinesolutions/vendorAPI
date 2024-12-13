# Node.js Backend Project Guidelines

## Branch Management

- Always create your branch from the `development` branch
- Branch naming should be feature/bug/ticket focused (e.g., `feature/user-auth`, `bug/login-fix`)
- Do not include personal names in branch names

## Protected Files

The following files are protected and should not be modified:

- `expressLoader.ts`
- `mongoDbLoader.ts`
- `package-scripts.js`
- `app.ts`

## Naming Conventions

### Folders

- Use kebab-case for folder names (lowercase with hyphens)
- No spaces allowed in folder names
- Examples:
  - ✅ `response-handler`
  - ✅ `data-models`
  - ❌ `response handler`
  - ❌ `ResponseHandler`

### Files

#### Services

- Location: `/services` directory
- Format: `<service-name>.service.ts`
- Example: `Modules.service.ts`

#### Controllers

- Location: `/controllers` directory
- Format: `<controller-name>.controller.ts` (TitleCase)
- Example: `Modules.controller.ts`

#### Types

- Location: `/types` directory
- Format: `<type-name>.type.ts`
- Example: `modules.type.ts`

## Database Schemas

### Schema Keys

- Use camelCase for all schema keys
- Examples:
  - ✅ `parentId`
  - ✅ `displayOrder`
  - ✅ `createdAt`
  - ❌ `parent_id`
  - ❌ `Display_order`

### Schema Interfaces

- Must extend MongoDB Document
- Example:

```typescript
import { Document } from 'mongoose';

export interface IModuleDocument extends Document {
  // schema properties
}
```

## TypeScript Naming Conventions

### Interfaces and Types

- Interfaces must start with 'I'
  - Example: `IUserData`, `IModuleConfig`
- Types must start with 'T'
  - Example: `TResponseData`, `TQueryParams`

## Best Practices

- Follow consistent naming patterns across the project
- Keep file and folder names descriptive and relevant to their purpose
- Maintain clean and organized directory structure
- Document any deviations from these rules if necessary
