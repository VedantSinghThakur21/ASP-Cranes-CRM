import React from 'react';
import { Settings, FileText, Users, Wrench, Calendar } from 'lucide-react';
import { CollapsibleCard } from '../components/common/CollapsibleCard';
import { QuotationConfig } from '../components/config/QuotationConfig';
import { ResourceRatesConfig } from '../components/config/ResourceRatesConfig';
import { AdditionalParamsConfig } from '../components/config/AdditionalParamsConfig';
import { useAuthStore } from '../store/authStore';
import { Card, CardHeader, CardTitle, CardContent } from '../components/common/Card';

export function Config() {
  const { user } = useAuthStore();

  if (!user || (user.role !== 'admin' && user.role !== 'operations_manager')) {
    return (
      <div className="p-4 text-center text-gray-500">
        You don't have permission to access this page.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Configuration</h1>
        <Settings className="h-6 w-6 text-gray-400" />
      </div>

      <div className="space-y-6">
        <CollapsibleCard 
          icon={<Calendar className="h-5 w-5" />}
          title="Quotation Order Type Settings"
          defaultExpanded={true}
        >
          <QuotationConfig />
        </CollapsibleCard>

        <CollapsibleCard 
          icon={<FileText className="h-5 w-5" />}
          title="Quotation Form"
          defaultExpanded={true}
        >
          <div className="text-sm text-gray-500 p-4">
            Configure quotation form settings and defaults here.
          </div>
        </CollapsibleCard>
        
        <CollapsibleCard
          icon={<Users className="h-5 w-5" />}
          title="Resource Rates"
          defaultExpanded={true}
        >
          <ResourceRatesConfig />
        </CollapsibleCard>

        <CollapsibleCard
          icon={<Wrench className="h-5 w-5" />}
          title="Additional Parameters"
          defaultExpanded={true}
        >
          <AdditionalParamsConfig />
        </CollapsibleCard>
      </div>
    </div>
  );
} 