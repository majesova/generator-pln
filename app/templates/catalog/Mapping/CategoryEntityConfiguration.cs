using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using <%= projectName %>.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.Mapping
{
    public class <%= catalogName %>EntityConfiguration : IEntityTypeConfiguration<<%= catalogName %>>
    {
        public void Configure(EntityTypeBuilder<<%= catalogName %>> builder)
        {
            builder.Property(p => p.Name).HasMaxLength(100).IsRequired();
            builder.Property(p => p.IsActive).IsRequired();
        }
    }
}
