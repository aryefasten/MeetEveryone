using System;
using System.Collections.Generic;
using System.Linq;

namespace MeetEveryone
{
    class Program
    {
        static void Main(string[] args)
        {
            mainF(25, 4);
            Console.WriteLine("Hello World!");
        }
        static void mainF(int particients, int groupSize)
        {
            if (checkPossibel(particients, groupSize)) throw new Exception($"{particients} doesn't devide by {groupSize}");
            var firstSetting = FirstSetting(particients, groupSize);
            var allOtherSettings = AllOtherSettings(firstSetting);
        }

        static List<List<List<int>>> AllOtherSettings(List<List<int>> firstSetting)
        {
            throw new NotImplementedException();
        }

        private static bool checkPossibel(int particients, int groupSize)
        {
            return particients % groupSize > 0;
        }

        static List<List<int>> FirstSetting(int particients, int groupSize)
        {
            var groups = particients / groupSize;
            var setting = new List<List<int>>();
            for (int i = 0; i < groups; i++)
            {
                var first = (groupSize * i) + 1;
                setting.Add(Enumerable.Range(first, groupSize).ToList());
            }
            return setting;
        }
    }

}
