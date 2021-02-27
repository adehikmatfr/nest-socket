
export class ExportDataDTO {
    public salesChannelAccountId: string;
    public channelId: string;
    public tenantId?: number;
    public countProgress?: number;
    mapToexportDataDTO(exportData : ExportDataDTO){
        return {...exportData, ...this}
    }
  }
  