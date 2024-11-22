import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQL']
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
  },
  {
    category: 'DevOps',
    icon: <Settings className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform']
  },
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">A comprehensive overview of my technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};