import { Module } from '@nestjs/common';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'ANALYTCS_DATA_CLIENT',
      useFactory: () => {
        return new BetaAnalyticsDataClient({
          credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          projectId: process.env.PROJECT_ID,
        });
      },
    },
  ],
  exports: ['ANALYTCS_DATA_CLIENT'],
})
export class GoogleDataClient {}
