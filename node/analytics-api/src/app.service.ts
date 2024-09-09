import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTCS_DATA_CLIENT')
    private readonly analyticsDataClient: BetaAnalyticsDataClient,
  ) {}

  async getHello(): Promise<any> {
    const propertyId = process.env.PROPERTY_ID;

    const [response] = await this.analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2024-07-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'country',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });

    return response;
  }
}
