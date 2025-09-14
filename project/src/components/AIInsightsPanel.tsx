import { useState } from "react";
import { Brain, AlertTriangle, CheckCircle, Clock, TrendingUp, Target, Activity } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface PatientData {
  name: string;
  age: string;
  condition: string;
  vitals: {
    heartRate: string;
    bloodPressure: string;
    temperature: string;
    oxygen: string;
  };
}

interface AIInsightsPanelProps {
  patientData: PatientData;
  emergencyType: string;
}

export function AIInsightsPanel({ patientData, emergencyType }: AIInsightsPanelProps) {
  const [activeTab, setActiveTab] = useState("assessment");

  // AI-generated insights based on patient data and emergency type
  const aiAssessment = {
    severityScore: emergencyType === "Motor Vehicle Accident" ? 7.2 : 5.8,
    primaryConcerns: [
      { concern: "Potential internal injuries", priority: "high", confidence: 85 },
      { concern: "Elevated blood pressure", priority: "medium", confidence: 78 },
      { concern: "Respiratory distress risk", priority: "medium", confidence: 65 }
    ],
    recommendations: [
      {
        action: "Immediate chest X-ray upon arrival",
        reasoning: "Rule out pneumothorax and rib fractures",
        priority: "critical",
        timeframe: "0-5 mins"
      },
      {
        action: "Establish large bore IV access",
        reasoning: "Prepare for fluid resuscitation if needed",
        priority: "high",
        timeframe: "5-10 mins"
      },
      {
        action: "Cardiac monitoring",
        reasoning: "Monitor for arrhythmias due to chest trauma",
        priority: "high", 
        timeframe: "Continuous"
      }
    ],
    hospitalMatch: {
      recommended: "St. Mary's General Hospital",
      reasoning: "Level 1 trauma center with cardiothoracic surgery capabilities",
      match: 92
    }
  };

  const renderAssessment = () => (
    <div className="space-y-4">
      {/* AI Severity Score */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-900 flex items-center space-x-2">
            <Brain className="h-4 w-4 text-purple-600" />
            <span>AI Severity Assessment</span>
          </h4>
          <Badge className="bg-red-100 text-red-800">Score: {aiAssessment.severityScore}/10</Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-red-500 h-2 rounded-full"
            style={{ width: `${aiAssessment.severityScore * 10}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">
          High priority case for {patientData.age} year old patient. Recommend immediate transport to Level 1 trauma center.
        </p>
      </div>

      {/* Primary Concerns */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 text-orange-500" />
          <span>Primary Concerns</span>
        </h4>
        <div className="space-y-2">
          {aiAssessment.primaryConcerns.map((concern, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-900">{concern.concern}</p>
                <p className="text-xs text-gray-600">Confidence: {concern.confidence}%</p>
              </div>
              <Badge 
                className={`ml-2 text-xs ${
                  concern.priority === 'high' ? 'bg-red-100 text-red-800' :
                  concern.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}
              >
                {concern.priority}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
        <Target className="h-4 w-4 text-blue-500" />
        <span>AI Treatment Recommendations</span>
      </h4>
      
      <div className="space-y-3">
        {aiAssessment.recommendations.map((rec, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h5 className="font-medium text-gray-900">{rec.action}</h5>
                <p className="text-sm text-gray-600 mt-1">{rec.reasoning}</p>
              </div>
              <div className="flex flex-col items-end space-y-1 ml-3">
                <Badge 
                  className={`text-xs ${
                    rec.priority === 'critical' ? 'bg-red-100 text-red-800' :
                    rec.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {rec.priority}
                </Badge>
                <span className="text-xs text-gray-500 flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{rec.timeframe}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPredictions = () => (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
        <TrendingUp className="h-4 w-4 text-green-500" />
        <span>Outcome Predictions</span>
      </h4>
      
      <div className="space-y-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="font-medium text-green-900">Recovery Probability</span>
            <Badge className="bg-green-200 text-green-800 text-xs ml-auto">94%</Badge>
          </div>
          <p className="text-sm text-green-700">
            High likelihood of full recovery with appropriate treatment
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-900">Hospital Stay</span>
            <Badge className="bg-blue-200 text-blue-800 text-xs ml-auto">2-3 days</Badge>
          </div>
          <p className="text-sm text-blue-700">
            Estimated length of stay based on similar cases
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <span className="font-medium text-yellow-900">Complication Risk</span>
            <Badge className="bg-yellow-200 text-yellow-800 text-xs ml-auto">Low (12%)</Badge>
          </div>
          <p className="text-sm text-yellow-700">
            Monitor for pneumothorax and cardiac arrhythmias
          </p>
        </div>
      </div>

      {/* Hospital Recommendation */}
      <div className="border-t pt-4">
        <h5 className="font-medium text-gray-900 mb-3">Recommended Hospital</h5>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-purple-900">{aiAssessment.hospitalMatch.recommended}</span>
            <Badge className="bg-purple-200 text-purple-800 text-xs">
              {aiAssessment.hospitalMatch.match}% match
            </Badge>
          </div>
          <p className="text-sm text-purple-700">
            {aiAssessment.hospitalMatch.reasoning}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* AI Status Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-900">AI Analysis Active</span>
        </div>
        <Badge className="bg-blue-100 text-blue-800 text-xs">v2.1</Badge>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <Button
          size="sm"
          variant={activeTab === "assessment" ? "default" : "ghost"}
          onClick={() => setActiveTab("assessment")}
          className="flex-1 text-xs"
        >
          Assessment
        </Button>
        <Button
          size="sm"
          variant={activeTab === "recommendations" ? "default" : "ghost"}
          onClick={() => setActiveTab("recommendations")}
          className="flex-1 text-xs"
        >
          Treatment
        </Button>
        <Button
          size="sm"
          variant={activeTab === "predictions" ? "default" : "ghost"}
          onClick={() => setActiveTab("predictions")}
          className="flex-1 text-xs"
        >
          Outcomes
        </Button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === "assessment" && renderAssessment()}
        {activeTab === "recommendations" && renderRecommendations()}
        {activeTab === "predictions" && renderPredictions()}
      </div>

      {/* Quick Actions */}
      <div className="border-t pt-4">
        <h5 className="font-medium text-gray-900 mb-3">Quick AI Actions</h5>
        <div className="grid grid-cols-1 gap-2">
          <Button size="sm" variant="outline" className="justify-start text-xs">
            <Brain className="h-3 w-3 mr-2" />
            Generate Treatment Protocol
          </Button>
          <Button size="sm" variant="outline" className="justify-start text-xs">
            <Target className="h-3 w-3 mr-2" />
            Update Hospital ETA
          </Button>
          <Button size="sm" variant="outline" className="justify-start text-xs">
            <Activity className="h-3 w-3 mr-2" />
            Send Alert to ER Team
          </Button>
        </div>
      </div>
    </div>
  );
}