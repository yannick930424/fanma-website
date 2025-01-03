import { Shield, Building, Lightbulb, FileCheck, GitPullRequest } from 'lucide-react';

export const SERVICE_ICONS = {
  codes: {
    services: {
      compliance: FileCheck,
      alternative: GitPullRequest,
    },
    applications: {
      fireSafety: Shield,
      complexBuildings: Building,
      innovations: Lightbulb
    }
  }
} as const;