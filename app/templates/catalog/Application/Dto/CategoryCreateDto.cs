using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace <%= projectName %>.<%= catalogNamePluralize %>.Dto
{
    public class <%= catalogName %>CreateDto : EntityDto
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
    }
}
